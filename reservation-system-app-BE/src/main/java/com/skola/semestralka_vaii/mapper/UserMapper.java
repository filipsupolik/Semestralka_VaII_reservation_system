package com.skola.semestralka_vaii.mapper;

import com.skola.semestralka_vaii.dto.SignupDto;
import com.skola.semestralka_vaii.dto.UserDto;
import com.skola.semestralka_vaii.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignupDto signupDto);
}
