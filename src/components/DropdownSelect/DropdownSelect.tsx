/** @jsxRuntime classic /*
/** @jsx jsx */
import React from "react"
import { Flex, jsx } from "theme-ui"
import { useSelect } from "downshift"

interface DropdownSelectProps {
  label?: string
  options: Array<string>
}

/** Component responsible for rendering a select dropdown from given options */
const DropdownSelect = ({ label, options }: DropdownSelectProps) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items: options })
  return (
    <Flex
      sx={{
        alignItems: "center",
        position: "relative",
      }}
    >
      {label && (
        <label
          sx={{
            marginRight: 2,
            cursor: "pointer",
            color: "muted",
          }}
          {...getLabelProps()}
        >
          {label}
        </label>
      )}
      <button
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          border: "2px solid transparent",
          cursor: "pointer",
          padding: 2,
          backgroundColor: "low_emphasis",
          justifyContent: "center",
          alignItems: "center",
          outline: 0,
          color: "muted",
          transition: "all .2s linear",

          "&:focus, &:hover": {
            boxShadow: "0px 0px 0px 4px #ebf3fb",
            borderColor: "highlight",
            backgroundColor: "#fff",
            color: "text",
          },
        }}
        type="button"
        {...getToggleButtonProps()}
      >
        {selectedItem || "Select an option"}
      </button>
      {isOpen && (
        <ul
          {...getMenuProps()}
          sx={{
            maxHeight: 350,
            maxWidth: 300,
            position: "absolute",
            overflowY: "scroll",
            left: 0,
            top: 35,
            marginTop: 3,
            padding: 4,
            borderRadius: 4,
            outline: 0,
            listStyle: "none",
            border: "1px solid #E9EBED",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
            zIndex: 9,
            transition: "all .2s linear",
          }}
        >
          {options.map((item, index) => (
            <li
              key={`${item}${index}`}
              sx={{
                padding: 2,
                cursor: "pointer",
                borderRadius: 2,
                color: selectedItem === item ? "#fff" : "text",
                backgroundColor:
                  selectedItem === item
                    ? "highlight"
                    : highlightedIndex === index
                    ? "medium_emphasis"
                    : "#fff",
                transition: "all .2s linear",
              }}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Flex>
  )
}

export default DropdownSelect
