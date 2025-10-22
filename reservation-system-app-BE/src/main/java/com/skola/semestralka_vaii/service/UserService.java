package com.skola.semestralka_vaii.service;

import com.skola.semestralka_vaii.dto.CredentialsDto;
import com.skola.semestralka_vaii.dto.SignupDto;
import com.skola.semestralka_vaii.dto.UserDto;
import com.skola.semestralka_vaii.entity.User;
import com.skola.semestralka_vaii.exceptions.AppException;
import com.skola.semestralka_vaii.mapper.UserMapper;
import com.skola.semestralka_vaii.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserDto findUserByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

    public UserDto login(CredentialsDto credentials) {
        User user = userRepository.findByEmail(credentials.getEmail())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentials.getPassword()), user.getPassword())) {
            return userMapper.toUserDto(user);
        }

        throw new AppException("Invalid password", HttpStatus.UNAUTHORIZED);
    }

    public UserDto register(SignupDto signupDto) {
        Optional<User> optionalUser =  userRepository.findByEmail(signupDto.getEmail());

        if (optionalUser.isPresent()) {
            throw new AppException("User with this email already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signUpToUser(signupDto);

        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signupDto.getPassword())));

        User savedUser = userRepository.save(user);
        return userMapper.toUserDto(savedUser);
    }
}
