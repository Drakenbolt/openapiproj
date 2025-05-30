# openapi-client
REST API для освітньої платформи (Course, Student)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.14.0-SNAPSHOT
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.9+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.education-platform.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.education-platform.com"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Отримати список курсів
        api_instance.courses_get()
    except ApiException as e:
        print("Exception when calling DefaultApi->courses_get: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.education-platform.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**courses_get**](docs/DefaultApi.md#courses_get) | **GET** /courses | Отримати список курсів
*DefaultApi* | [**courses_id_delete**](docs/DefaultApi.md#courses_id_delete) | **DELETE** /courses/{id} | Видалити курс
*DefaultApi* | [**courses_id_get**](docs/DefaultApi.md#courses_id_get) | **GET** /courses/{id} | Отримати курс за ID
*DefaultApi* | [**courses_id_put**](docs/DefaultApi.md#courses_id_put) | **PUT** /courses/{id} | Оновити курс
*DefaultApi* | [**courses_post**](docs/DefaultApi.md#courses_post) | **POST** /courses | Створити новий курс
*DefaultApi* | [**students_get**](docs/DefaultApi.md#students_get) | **GET** /students | Отримати список студентів
*DefaultApi* | [**students_id_delete**](docs/DefaultApi.md#students_id_delete) | **DELETE** /students/{id} | Видалити студента
*DefaultApi* | [**students_id_get**](docs/DefaultApi.md#students_id_get) | **GET** /students/{id} | Отримати студента за ID
*DefaultApi* | [**students_id_put**](docs/DefaultApi.md#students_id_put) | **PUT** /students/{id} | Оновити студента
*DefaultApi* | [**students_post**](docs/DefaultApi.md#students_post) | **POST** /students | Додати студента


## Documentation For Models

 - [Course](docs/Course.md)
 - [Student](docs/Student.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.


## Author




