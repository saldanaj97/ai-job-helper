""" Main module of the FastAPI application. """

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    """Root endpoint of the FastAPI application."""
    return {"message": "Hello World"}
