#!/usr/bin/python3
"""function that returns an object (Python data structure)
represented by a JSON string"""
import json


def from_json_string(my_str):
    """
    Return an object by a JSON representation.

    Args:
        my_str: JSON representation

    Raises:
        Exception: when the string can't be decoded
    """

    return json.loads(my_str)
