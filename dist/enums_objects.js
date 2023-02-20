"use strict";
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPER_ADMIN";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
// objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.User);
