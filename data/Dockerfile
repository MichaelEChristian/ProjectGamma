FROM postgres:14.2-bullseye
COPY weddings.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
