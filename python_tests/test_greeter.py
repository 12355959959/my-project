from my_project import greet


def test_greet_default() -> None:
    assert greet() == "Hello, Python!"


def test_greet_custom_name() -> None:
    assert greet("Codex") == "Hello, Codex!"
