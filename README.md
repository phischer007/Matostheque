# Matostheque

This repository is a **web-based application** tailored for members of the “Laboratoire Interdisciplinaire de Physique” at Université Grenoble Alpes. This system serves as a virtual material library, facilitating the sharing, lending, and borrowing of materials among users. 

Its primary goal is to streamline the management and accessibility of laboratory resources within the research community.

## Getting Started
**Key Points**

**Technical coverage**:
- **Backend architecture**: Describes the server-side infrastructure, outlining how data is managed and accessed through APIs (i.e.; Matostheque folder).
- **Frontend Structure**: Details the client-side implementation, including user interfaces and interactions design (i.e.; fronttheque folder -- contains Next.js and React.js codes).

Clone this repository locally:

`git clone https://gricad-gitlab.univ-grenoble-alpes.fr/duffouvi/matostheque.git`


## Technology Stack

- **Database** : PostgreSQL database was selected for this project together with psycopg2, the PostgreSQL adapter for Python, using pip. It is a relational database management system (RDBMS). It provides robust features for managing structured data, ensuring data integrity, and supporting complex queries.
- **Node.js**: Serves as the runtime environment for executing JavaScript on the server side.
- **Node Package Manager**: npm manages dependencies and facilitates the integration of various libraries and tools into our project.
- **Next.js**: A popular framework for [React](https://fr.react.dev/) applications that enables server-side rendering (SSR) and efficient client-side routing. It provides optimized performance and Search Engine optimization (SEO) benefits by pre-rendering pages.
- **Django**: a high-level Python web framework that encourages rapid development and clean, pragmatic design. It powers the server-side of the application, handling business logic, data persistence with PostgreSQL, and serving APIs.
- **Gunicorn**: A Python WSGI HTTP Server for UNIX. It serves as a Python web application server, handling requests from clients and passing them to Django for processing. Gunicorn ensures efficient handling of concurrent requests.
- **Nginx**: Nginx is used as a reverse proxy server, load balancer, and HTTP cache. It enhances the application's performance by serving static files, handling SSL/TLS termination, and routing requests to Gunicorn.
- **Maildev**: A simple email server for development purposes. It allows us to test email functionalities locally without sending emails to real addresses, facilitating email integration and debugging during development.

## Documentation
See [Documentation Index](https://gricad-gitlab.univ-grenoble-alpes.fr/duffouvi/matostheque/-/wikis/Documentation)



