package com.skola.semestralka_vaii.dto;

import com.skola.semestralka_vaii.enums.Role.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserDto {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
    private String token;
}
