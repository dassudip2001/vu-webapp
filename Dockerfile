FROM python:alpine
RUN pip install django
COPY . .
RUN python manage.py migrate
CMD ["python","manage.py","runserver","0.0.0.0:80"]



# more then one installation required
#FROM python:3
#ENV PYTHONDONTWRITEBYTECODE=1
#ENV PYTHONUNBUFFERED=1
#WORKDIR /code
#COPY requirements.txt /code/
#RUN pip install -r requirements.txt
#COPY . /code/