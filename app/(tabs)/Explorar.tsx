import { VStack, Text } from "native-base"
import { NativeBaseProvider, StatusBar } from 'native-base';

export default function Explorar(){
    return(
        <NativeBaseProvider>
        <VStack>
            <Text>Explorar</Text>
        </VStack>
        </NativeBaseProvider>
    )
}