package com.carlos.notecode.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "codefiles")
public class CodeFile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String filename;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "uploaded_at")
    @CreationTimestamp
    private LocalDateTime uploadedAt;
}
