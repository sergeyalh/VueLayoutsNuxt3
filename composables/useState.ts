export const useUser = () => useState<string>('user', () => '');
export const useUsersList = () => useState<string[]>('usersList', () => ["1","2","test"]); // Maybe useFetch?
export const useToken = () => useState<string>('token', () => '');