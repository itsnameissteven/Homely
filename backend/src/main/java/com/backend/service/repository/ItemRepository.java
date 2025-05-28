package com.backend.service.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.service.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, UUID> {
}