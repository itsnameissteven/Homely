package com.backend.service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "item")
public class Item extends BaseModel<Item> {
  private String name;
  private String description;

  public Item() {
  }

  public Item(String name, String description) {
    this.name = name;
    this.description = description;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public Item setName(String name) {
    this.name = name;
    return this;
  }

  public Item setDescription(String description) {
    this.description = description;
    return this;
  }
}