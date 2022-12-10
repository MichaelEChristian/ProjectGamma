FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# copying all top level files
COPY requirements.txt requirements.txt
COPY main.py main.py

# Copy all of the directories that contain your application code
COPY api api
COPY dbqueries dbqueries
COPY library library
COPY schemas schemas

RUN pip install -r requirements.txt
CMD uvicorn main:app --reload --host 0.0.0.0
