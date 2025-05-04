package com.ccc.pastelerianatalia.model.enums;

import com.fasterxml.jackson.annotation.JsonIgnore;

public enum ProductoTamanos {

    PEQUENA("0"),
    MEDIANA("1"),
    GRANDE("2");

    private final String code;

    ProductoTamanos(String code){
        this.code = code;
    }

    @JsonIgnore
    public String code(){
        return code;
    }
}
