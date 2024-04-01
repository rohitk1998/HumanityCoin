


export function setFormValues(data,setValueFn){
    Object.entries(data).forEach(([name, value]) => setValueFn(name, value))
}

export function appendFormData(data,formData){
    Object.entries(data).forEach(([name, value]) =>
          formData.append(name, value)
        );
}