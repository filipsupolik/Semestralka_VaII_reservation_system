package com.skola.semestralka_vaii.controller;

import com.skola.semestralka_vaii.config.UserAuthProvider;
import com.skola.semestralka_vaii.dto.CredentialsDto;
import com.skola.semestralka_vaii.dto.SignupDto;
import com.skola.semestralka_vaii.dto.UserDto;
import com.skola.semestralka_vaii.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) {
        UserDto userDto = userService.login(credentialsDto);

        userDto.setToken(userAuthProvider.createToken(userDto.getEmail()));
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignupDto signupDto) {
        UserDto userDto = userService.register(signupDto);
        userDto.setToken(userAuthProvider.createToken(userDto.getEmail()));
        return ResponseEntity.created(URI.create("/users/" + userDto.getId()))
                .body(userDto);
    }
}
