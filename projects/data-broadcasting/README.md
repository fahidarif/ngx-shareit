## Ngx-ShareIt 

> Amazing package for data sharing from anywhere of the application to anywhere. It has really simple mechanism of doing it, just plug and play ..


## Features
- Share/Broadcast data.
- Share data from any level of the component in application.
- Access data from any level of component in application
- Really lightweight

### Usage
-------------------------------------------
### Import in module.

```js

imports: [
    BrowserModule,
    NgShareModule
],

```
### Add in component.

```js
export class AppComponent {
   constructor(private dataSer: DataSharingService) { }
}
```

### Share Data from any component like.

```js
shareUsers() {
    // keep one thing in mind always share data in object format
    this.dataSer.shareData({ users: '// Array of users data' });
}
```


### Access Data from any component like.

```js
getUsers() {
    this.dataSer.getData().subscribe(data => {
        this.users = data.users;
    });
}
```

---------------------------------------
