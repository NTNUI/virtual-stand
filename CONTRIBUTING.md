# Contributing

The project is built using React and [Firestore Database](https://firebase.google.com/docs/firestore). To access and edit the database you need access, currently managed by [@olros](https://github.com/olros). To edit already existing groups you do not need access to the database, but you can get access using [the login page](https://stand.ntnui.no/logg-inn) (Firebase email authentication, recommended for non-developers).

## Editing group information

To add a new group, a developer must add a new field directly in the Firestore database. Any authenticated user/non-developer can edit groups at `stand.ntnui.no/grupper/[slug]/rediger/`.

### Group object template

To add a group, you need to add a field in `info > group`:

```firebase
groupname (map)
    contact (string): ""
    cover_image (string): ""
    images (array): []
    long_description (string): ""
    name (string): "GroupName"
    short_description (String): ""
    slug (string): "groupname"
```

An example of a group after adding a new map field in the database:

![firestore template object](https://i.imgur.com/6FH5t5B.png)

After adding the new group, add data/information to the group using the live site itself while logged in, at `stand.ntnui.no/grupper/[slug]/rediger/`.
