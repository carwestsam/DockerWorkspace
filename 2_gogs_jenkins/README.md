## files should not included in actuall usage

to make this project could work just after a simple clone, and docker-compose up, some credentials are stored in this project. need to be change in the real project usage.

```
.env
postgres/initdb.d/*
gogs/conf/app.ini
```


