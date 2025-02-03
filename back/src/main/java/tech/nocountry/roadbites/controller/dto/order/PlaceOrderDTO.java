package tech.nocountry.roadbites.controller.dto.order;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record PlaceOrderDTO(
        @Schema(description = "Customer name", example = "javier")
        @NotBlank(message = "Customer name is required")
        String userName,
        @Schema(description = "List of order menus and quantity")
        @NotNull(message = "Order menus is required")
        @Valid
        List<CreateOrderMenuDTO> orderMenus
) {
}
