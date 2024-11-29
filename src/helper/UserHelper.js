export const getUserData = () => {
    try {
        const user = localStorage.getItem('user');
        const res = JSON.parse(user);
        if (res) {
            return res;
        } else {
            return null;
        }
    } catch (e) {
        throw e;
    }
}