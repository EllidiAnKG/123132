
import { supabase } from './qwe.js';


// Функция регистрации пользователя
export const registerUser = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        console.error('Ошибка регистрации:', error.message);
    } else {
        console.log('Пользователь зарегистрирован:', user);
    }
};

// Функция авторизации пользователя
export const loginUser = async (email, password) => {
    const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error('Ошибка входа:', error.message);
    } else {
        console.log('Пользователь авторизован:', user);
    }
};


// Функция выхода пользователя
export const logoutUser = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('Ошибка выхода:', error.message);
    } else {
        console.log('Пользователь вышел');
    }
};


export const sendTwoFactorCode = async (email) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
      });
  
      if (error) {
        console.error('Ошибка отправки кода:', error.message);
        return; 
      }
  
      console.log('Код двухфакторной аутентификации отправлен!');
  
    } catch (error) {
      console.error('Ошибка отправки кода:', error.message);
    }
  };
  
  // Функция для завершения авторизации с кодом двухфакторной аутентификации
  export const completeTwoFactorAuth = async (email, code) => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: code, 
      });
  
      if (error) {
        console.error('Ошибка двухфакторной аутентификации:', error.message);
        return;
      }
  
      console.log('Пользователь авторизован с двухфакторной аутентификацией:', user);
  
    } catch (error) {
      console.error('Ошибка двухфакторной аутентификации:', error.message);
    }
  };

