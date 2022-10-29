'''
Command line utility functions.

:Authors: Weixuan Lin
'''

import time

import click
import uvicorn

from .internal.config import settings
from .internal.db import connect_db, db_exist
from .internal.db import init_db as _init_db


def create_db():
    '''
    Wrap the database creation and initialization with click prompts.
    '''
    click.echo('Creating and initializing the database...')
    _init_db()
    click.echo('Done.')


def create_db_if_not_exist():
    '''
    Check if the database file exists. If not, prompt a message to see if it
    needs to be created.
    '''
    if not db_exist():
        click.confirm(
            '[WARNING] The database file is not found, do you want to create ' +
            'it now?',
            abort=True
        )
        create_db()


@click.group(invoke_without_command=True)
def cli() -> None:
    '''
    Click commands group.
    '''
    pass    # pylint: disable=unnecessary-pass


@cli.command()
def start() -> None:
    '''
    Start the server for development.
    '''
    uvicorn.run(
        'class_route_api.main:app',
        host=settings.SERVER_DOMAIN,
        port=settings.SERVER_PORT,
        reload=True,
        log_level='debug'
    )


@cli.command()
def init_db() -> None:
    '''
    Clear the existing data and create new tables.
    '''
    if db_exist():
        click.confirm(
            '[WARNING] The database file already exists, do you want to drop ' +
            'all data and recreate it?',
            abort=True
        )

    click.echo('Initializing the database...')
    create_db()


@cli.command()
def add_data() -> None:
    '''
    Insert dummy data to the database file.
    '''
    create_db_if_not_exist()

    topic = click.prompt('Topic', type=str)
    phase = click.prompt('Phase (1-4)', type=int)
    rating = click.prompt('Rating (1-5)', type=int)
    detail = click.prompt('Detail', type=str)

    connection = connect_db()
    with connection:
        connection.execute(
            f'''
            INSERT INTO reports (time, topic, phase, rating, detail)
            VALUES ({time.time()}, "{topic}", {phase}, {rating}, "{detail}");
        '''
        )

    connection.close()


@cli.command()
@click.option(
    '--size', default=5, show_default=True, help='Number of records to print.'
)
def print_db(size: int) -> None:
    '''
    Print the data records in the database.
    '''
    create_db_if_not_exist()

    connection = connect_db()
    with connection:
        records = connection.execute('SELECT * FROM reports').fetchmany(
            size=size
        )

        if len(records) == 0:
            click.echo('The database is empty.')
        else:
            for record in records:
                print(record)

    connection.close()


def init_commands() -> None:
    '''
    Initialize all click commands.
    '''
    try:
        cli(standalone_mode=False)
    except click.Abort:
        # We don't want to throw click abort as error.
        pass
