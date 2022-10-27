'''
The database utils.

:Authors: Weixuan Lin
'''

import os
import sqlite3
from typing import Generator

from .config import settings

DATABASE_PATH = os.path.join(settings.APP_ROOT_PATH, settings.DATABASE_PATH)


def db_exist() -> bool:
    '''
    Check if the database file exists.
    '''
    return os.path.isfile(DATABASE_PATH)


def connect_db() -> sqlite3.Connection:
    '''
    Connect to the database.
    '''
    return sqlite3.connect(DATABASE_PATH, detect_types=sqlite3.PARSE_DECLTYPES)


def get_db() -> Generator[sqlite3.Connection, None, None]:
    '''
    Create database session.
    '''
    if not db_exist():
        raise IOError(
            'Database does not exist. Run initialization script first.'
        )

    database = connect_db()

    try:
        yield database
    finally:
        database.close()


def init_db() -> None:
    '''
    Initialize the database and create tables.
    '''
    database = connect_db()

    with open(
        os.path.join(settings.APP_ROOT_PATH, settings.DATABASE_SCHEMA_PATH),
        'rb'
    ) as schema:
        database.executescript(schema.read().decode('utf8'))
        database.close()
