'''
The problem reports API routes.

:Authors: Jonathan Xin
'''

import re
import time

from fastapi import APIRouter, Query
from pydantic import BaseModel

from class_route_api.internal.db import connect_db

router = APIRouter(prefix='/reports')


class Report(BaseModel):
    '''
    Report class
    '''
    topic: str
    phase: int = Query(ge=1, le=4)
    rating: int = Query(ge=1, le=5)
    details: str | None = None


def titlecase(input_str: str) -> str:
    """
    a helper function for converting a str to titlecase
    """
    return re.sub(
        r"[A-Za-z]+('[A-Za-z]+)?", lambda word: word.group(0).capitalize(),
        input_str
    )


@router.post("/store/")
async def store_report(report: Report) -> None:
    '''
    store a report sent from tester page
    '''
    # all topics in the database are stored as titlecase
    topic = titlecase(report.topic)
    # leave the details field empty if the tester entered nothing
    if not report.details:
        report.details = ''

    connection = connect_db()

    with connection:
        connection.execute(
            f'''
            INSERT INTO reports (time, topic, phase, rating, detail)
            VALUES ({time.time()}, "{topic}", {report.phase},
                    {report.rating}, "{report.details}");
        '''
        )

    connection.close()


@router.get("/request/")
async def request_report(
    # make topics required by explicitly declaring the Query parameter
    *,
    topics: list[str] = Query(default=...),
    phases: list[int] = Query(ge=1, le=4),
    ratings: list[int] = Query(ge=1, le=5)
) -> dict:
    '''
    return report(s) to analytics page
    '''
    connection = connect_db()

    with connection:
        reports_matched = connection.execute(
            f"SELECT * FROM reports WHERE topic IN ({','.join('?' for _ in topics)})\
               AND phase IN ({','.join('?' for _ in phases)})\
               AND rating IN ({','.join('?' for _ in ratings)})",
            tuple(topics + phases + ratings)
        ).fetchall()

    connection.close()

    # convert list of report lists to list of JSON body
    temp_list = []
    for report in reports_matched:
        temp_list.append(
            {
                'time': report[1],
                'topic': report[2],
                'phase': report[3],
                'rating': report[4],
                'details': report[5]
            }
        )

    res_dct = {'reports matched': temp_list}
    return res_dct
