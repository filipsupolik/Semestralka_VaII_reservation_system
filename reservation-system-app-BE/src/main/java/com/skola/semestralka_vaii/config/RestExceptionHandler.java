package com.skola.semestralka_vaii.config;

import com.skola.semestralka_vaii.dto.ErrorDTO;
import com.skola.semestralka_vaii.exceptions.AppException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RestExceptionHandler {

    @ExceptionHandler(value = {AppException.class})
    @ResponseBody
    public ResponseEntity<ErrorDTO> handleAppException(AppException e) {
        return ResponseEntity.status(e.getCode())
                .body(ErrorDTO.builder().message(e.getMessage()).build());
    }
}
