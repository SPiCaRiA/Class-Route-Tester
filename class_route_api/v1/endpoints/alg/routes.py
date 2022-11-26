'''
The core Class Route algorithm API routes.

:Authors: Jonathan Xin
'''
from fastapi import APIRouter, Query

#from class_route_api.class_route_core.core_alg import translation

router = APIRouter(prefix='/alg')


@router.post("/gcheck/")
async def grammar_check(transcribed_text: str = Query(min_length=1)) -> dict:
    """
    grammar check API for future use
    """
    return {"result": transcribed_text}


@router.post("/translate/")
async def core_algorithm(gchecked_text: str = Query(min_length=1)) -> dict:
    """
    function call to the core algorithm
    """
    #return translation(gchecked_text)
    return {"result": "这是一个测试"}
