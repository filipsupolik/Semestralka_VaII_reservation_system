package com.skola.semestralka_vaii.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class SignupDto {

    private String firstName;
    private String lastName;
    private String email;
    private char[] password;
}
