# FROM python:alpine
# RUN pip install django
# COPY . .
# RUN python manage.py migrate
# CMD ["python","manage.py","runserver","0.0.0.0:8000"]

FROM python:3.8-alpine

ADD . /app

WORKDIR /app

RUN apk --update --upgrade add --no-cache  gcc musl-dev jpeg-dev zlib-dev libffi-dev cairo-dev pango-dev gdk-pixbuf-dev

RUN python -m pip install --upgrade pip

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

# EXPOSE 8000

COPY . .

# CMD [ "python", "manage.py","runserver" ]

# more then one installation required
#FROM python:3
#ENV PYTHONDONTWRITEBYTECODE=1
#ENV PYTHONUNBUFFERED=1
#WORKDIR /code
#COPY requirements.txt /code/
#RUN pip install -r requirements.txt
#COPY . /code/