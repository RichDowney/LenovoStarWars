import bcrypt from 'bcryptjs';

class User {
    id;
    email;
    password;
    token;

    constructor(data) {
        Object.assign(this, data);
    }

    async comparePassword(submittedPassword) {
        const isMatch = bcrypt.compare(submittedPassword, this.password);
        return isMatch;
    }
}

export default User