<p align="center">
<img width="200" src="src/assets/img/ntnui.svg" />
</p>

NTNUI virtual stand for NTNU matriculation ceremonies 2020/2021

## Development

1. Install dependencies: `yarn`
2. Compile and hot-reload: `yarn start`
3. Compile and minify for production: `yarn build`
4. Lint and fix files: `yarn lint`

The project is built using React and [Google Firestore Database](https://firebase.google.com/docs/firestore). To access and edit the database you need access, currently managed by [@olros](https://github.com/olros). To edit already existing groups you do not need access to the database, but you can get access using [the login page](https://stand.ntnui.no/logg-inn) (Firebase email authentication, recommended for non-developers).

## Firestore database

To add a new group, a developer must add a new field directly in the Firestore database. Any authenticated user/non-developer can edit existing groups at `stand.ntnui.no/grupper/[slug]/rediger/`.

### Group object template

To add a group, you need to create a new field in `info > group`:

```firebase
groupname (map)
    contact (string): ""
    cover_image (string): ""
    images (array): []
    long_description (string): ""
    name (string): "Group name"
    short_description (string): ""
    slug (string): "groupname"
```

An example of a group after adding a new map field in the database:

<img width="300" src="https://i.imgur.com/6FH5t5B.png" />

After adding the new group, add data/information to the group using the live site itself while logged in, at `stand.ntnui.no/grupper/[slug]/rediger/`.
