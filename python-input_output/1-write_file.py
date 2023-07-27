#!/usr/bin/python3
"""
Module 1-number_of_lines

Contains function that returns number of lines in text"""


def write_file(filename="", text=""):
    """
    Function that writes to a text file.
    Args:
        filename: filename
        text: text to write
    Raises:
        Exception: when the file can be opened
    """

    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
