'''
The Pydantic config file.

:Authors: Weixuan Lin
'''

from pydantic import AnyHttpUrl, BaseSettings


class Settings(BaseSettings):
    '''
    The project settings class.
    '''
    PROJECT_NAME: str
    DATABASE_PATH: str
    APP_ROOT_PATH: str
    DATABASE_SCHEMA_PATH: str
    BACKEND_CORS_ORIGINS: list[AnyHttpUrl]
    SERVER_DOMAIN: str
    SERVER_PORT: int

    class Config:
        '''
        The Pydantic config class.
        '''
        case_sensitive = True
        env_file = '.env'


# Due to the Pydantic issue_ on misreporting missing parameters, we need to
# disable type check here.
#
# .. _issue: https://github.com/pydantic/pydantic/issues/3767
settings = Settings()    # pyright: ignore [reportGeneralTypeIssues]
