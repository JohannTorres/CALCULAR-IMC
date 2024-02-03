import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./Resultimc/";


export default function Form(){

    const[height, setHeight] = useState(null)
    const[weihgt, setWeight] = useState(null)
    const[messageImc, setMessageImc] = useState("Preencha Peso e Altura.")
    const[imc, setImc] = useState(null)
    const[TextButton, setTextButton] = useState("CALCULAR")

    function imcCalculator(){
        //return setImc((weihgt/(height*height)).toFixed(2)) 
        return setImc((weihgt.replace(".", ",") / (height.replace(",", ".")*height.replace(",", "."))).toFixed(2)) 
        //return setImc(Number(weihgt)/(Number(height.replace(",", "."))*(Number(height.replace(",", ".")))).toFixed(2))     
    }

    function validationImc(){
        if (weihgt != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return(
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.70"
                keyboardType="numeric"
                />
                
                <Text>Peso:</Text>
                <TextInput
                onChangeText={setWeight}
                value={weihgt}
                placeholder="Ex. 90.00"
                keyboardType="numeric"
                />
                <Button 
                onPress={() => validationImc()}
                title="Calcular IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
        </View>
    );
}