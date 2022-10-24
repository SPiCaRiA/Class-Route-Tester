'''
Command line utility functions.

:Authors: Weixuan Lin
'''

import click
import uvicorn

from .internal.config import settings
from .internal.db import init_db as _init_db


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
    click.echo('Initializing the database.')
    _init_db()


def init_commands() -> None:
    '''
    Initialize all click commands.
    '''
    cli()
