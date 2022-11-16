'''
The core Class Route algorithm API routes.

:Authors: Jonathan Xin
'''
from fastapi import APIRouter, FastAPI

from class_route_api.class_route_core.core_alg import translation

router = APIRouter(prefix='/alg')
app = FastAPI()


@app.post("/translate/")
async def core_algorithm(transcribed_text: str) -> str:
    """
    function call to the core algorithm
    """
    # TODO: a filter for transcribed text
    return translation(transcribed_text)
