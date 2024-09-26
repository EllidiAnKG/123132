import { registerUser, loginUser, logoutUser, sendTwoFactorCode, completeTwoFactorAuth } from './module/auth.js';
const testEmail = 'test@example.com';
const testPassword = 'testpassword';

(async () => {
    // Регистрация
    await registerUser(testEmail, testPassword);

    // Авторизация
    await loginUser(testEmail, testPassword);

    // Выход
    await logoutUser();
    
    await sendTwoFactorCode()
    await completeTwoFactorAuth();
})();