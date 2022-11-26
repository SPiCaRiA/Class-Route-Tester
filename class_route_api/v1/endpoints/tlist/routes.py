'''
The topic list API routes.

:Authors: Jonathan Xin
'''
from fastapi import APIRouter

from class_route_api.internal.db import connect_db

router = APIRouter(prefix='/tlist')


@router.get("")
async def retrieve_list() -> dict:
    '''
    return all unique topics stored in database
    '''
    connection = connect_db()
    with connection:
        topic_list = connection.execute('SELECT DISTINCT topic FROM reports'
                                       ).fetchall()

    connection.close()
    # convert the list to a dict object
    res_dct = {"topics": [x[0] for x in topic_list]}
    return res_dct
