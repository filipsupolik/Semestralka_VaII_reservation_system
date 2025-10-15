package com.skola.semestralka_vaii.entity;

import com.skola.semestralka_vaii.enums.Role.PaymentsStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Payments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id", nullable = false)
    private Bookings booking;
    private Double amount;
    private String currency ="EUR";

    @Enumerated(EnumType.STRING)
    private PaymentsStatus payment_method = PaymentsStatus.PAID;

    @Enumerated(EnumType.STRING)
    private PaymentsStatus payment_status;
}
