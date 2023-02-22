import ApiTask from '@/api/ApiTask';
import { useQuery } from '@tanstack/vue-query';
import { ref, watch } from 'vue';
import type { Jwt } from '@/authentication/interfaces/Jwt';


const postLogin = async ( ): Promise<Jwt> => {

    const { data } = await ApiTask.post<Jwt>(`/user/login`);
    return data;
} 


const useClient = ( ) => {

    const JWT = ref<Jwt>();

    const { isLoading, data, isError } = useQuery(
        ['client'],
        () => postLogin( )
    )

    watch( data, () => {
        if (data.value)
            JWT.value = {...data.value};
    }, { immediate: true });

    return{
        isLoading,
        JWT,
        isError
    }
}

export default useClient;