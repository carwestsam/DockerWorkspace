# Simple Chat App

### initial

```
# workdir migration
sudo docker build -t app_migration .
```

```
# workdir back_end
sudo docker build -t app_back

```

### how to start

first start db server:

```
sudo docker run --name database -d  postgres

```

then do migration

```
./auto/migrate
```

then start backend
```
sudo docker run --rm -it -p 3000:3000 -v $PWD/back_end:/app --link database:database app_back
```

