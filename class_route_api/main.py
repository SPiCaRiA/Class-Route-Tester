'''
The main FastAPI app entry.

:Authors: Jonathan Xin
'''

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .internal.config import settings
from .v1.endpoints import alg, reports


def create_app() -> FastAPI:
    '''
    Create the FastAPI app instance.
    '''
    _app = FastAPI(title=settings.PROJECT_NAME)

    _app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    _app.include_router(alg, prefix='/api')
    _app.include_router(reports, prefix='/api')

    return _app


app = create_app()
