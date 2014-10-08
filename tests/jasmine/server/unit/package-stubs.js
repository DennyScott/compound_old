// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "standard-app-packages": {},
  "accounts-ui": {},
  "npm-bcrypt": {
    "NpmModuleBcrypt": {
      "type": "object",
      "members": {
        "gen_salt_sync": {
          "type": "function"
        },
        "genSaltSync": {
          "type": "function"
        },
        "gen_salt": {
          "type": "function"
        },
        "genSalt": {
          "type": "function"
        },
        "encrypt_sync": {
          "type": "function"
        },
        "hashSync": {
          "type": "function"
        },
        "encrypt": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "compare_sync": {
          "type": "function"
        },
        "compareSync": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "get_rounds": {
          "type": "function"
        },
        "getRounds": {
          "type": "function"
        }
      }
    }
  },
  "json": {},
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        }
      }
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 501
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 501
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 504
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 504
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 507
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 507
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "minifiers": {
    "CssTools": {
      "type": "object",
      "members": {
        "parseCss": {
          "type": "function"
        },
        "stringifyCss": {
          "type": "function"
        },
        "minifyCss": {
          "type": "function"
        },
        "minifyCssAst": {
          "type": "function"
        },
        "mergeCssAsts": {
          "type": "function"
        },
        "rewriteCssUrls": {
          "type": "function"
        }
      }
    },
    "UglifyJSMinify": {
      "type": "function"
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "jquery": {},
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "templating": {},
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "ec921ac677959aaa68fba9e61dd5c97f19d196a4"
                },
                "PUBLIC_SETTINGS": {
                  "type": "undefined"
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 9
            },
            "handle": {
              "type": "function",
              "refID": 11
            },
            "listen": {
              "type": "function",
              "refID": 13
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 15
            },
            "emit": {
              "type": "function",
              "refID": 17
            },
            "addListener": {
              "type": "function",
              "refID": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "type": "function",
              "refID": 21
            },
            "removeListener": {
              "type": "function",
              "refID": 23
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 25
            },
            "listeners": {
              "type": "function",
              "refID": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 9
            },
            "handle": {
              "ref": 11
            },
            "listen": {
              "ref": 13
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 0
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    },
    "WebAppInternals": {
      "type": "object",
      "members": {
        "identifyBrowser": {
          "type": "function"
        },
        "staticFilesMiddleware": {
          "type": "function"
        },
        "bindToProxy": {
          "type": "function"
        },
        "addRoute": {
          "type": "function"
        },
        "reloadClientPrograms": {
          "type": "function"
        },
        "generateBoilerplate": {
          "type": "function"
        },
        "staticFiles": {
          "type": "object",
          "members": {
            "/packages/underscore.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/underscore.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/underscore.js.map"
                }
              }
            },
            "/packages/meteor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/meteor.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/012a26290d9cb731a3b52b396e571c8159d11236.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/012a26290d9cb731a3b52b396e571c8159d11236.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/meteor.js.map"
                }
              }
            },
            "/packages/standard-app-packages.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/standard-app-packages.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/be7072e6abfda638502b63fa0f809c85c8c2b8ed.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/be7072e6abfda638502b63fa0f809c85c8c2b8ed.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/standard-app-packages.js.map"
                }
              }
            },
            "/packages/tracker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/tracker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/192a05cc46b867dadbe8bf90dd961f6f8fd1574f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/192a05cc46b867dadbe8bf90dd961f6f8fd1574f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/tracker.js.map"
                }
              }
            },
            "/packages/random.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/random.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/random.js.map"
                }
              }
            },
            "/packages/localstorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/localstorage.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/localstorage.js.map"
                }
              }
            },
            "/packages/json.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/json.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e22856eae714c681199eabc5c0710b904b125554.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e22856eae714c681199eabc5c0710b904b125554.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/json.js.map"
                }
              }
            },
            "/packages/base64.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/base64.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1a63019243b73298e2964e6d4680f25bca657726.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1a63019243b73298e2964e6d4680f25bca657726.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/base64.js.map"
                }
              }
            },
            "/packages/ejson.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ejson.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ejson.js.map"
                }
              }
            },
            "/packages/check.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/check.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/803a2be518a0c6c3949e45cf65c4ad627a3d603a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/803a2be518a0c6c3949e45cf65c4ad627a3d603a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/check.js.map"
                }
              }
            },
            "/packages/logging.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/logging.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/07e201b648f16be8435a4f666156995eeda0c750.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/07e201b648f16be8435a4f666156995eeda0c750.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/logging.js.map"
                }
              }
            },
            "/packages/retry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/retry.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/retry.js.map"
                }
              }
            },
            "/packages/reload.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/reload.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/92c60ae92333f52459da974d9158da7fedeb6375.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/92c60ae92333f52459da974d9158da7fedeb6375.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/reload.js.map"
                }
              }
            },
            "/packages/id-map.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/id-map.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/id-map.js.map"
                }
              }
            },
            "/packages/ordered-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ordered-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ordered-dict.js.map"
                }
              }
            },
            "/packages/geojson-utils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/geojson-utils.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/geojson-utils.js.map"
                }
              }
            },
            "/packages/minimongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/minimongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9005f7df7e2bef877712fee40d7b14aa8f5d4f8b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9005f7df7e2bef877712fee40d7b14aa8f5d4f8b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/minimongo.js.map"
                }
              }
            },
            "/packages/ddp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ddp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ddp.js.map"
                }
              }
            },
            "/packages/follower-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/follower-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/follower-livedata.js.map"
                }
              }
            },
            "/packages/application-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/application-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/application-configuration.js.map"
                }
              }
            },
            "/packages/mongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/mongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9bc2c5a8b2796fab86b51660ca643e5a49a30c84.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9bc2c5a8b2796fab86b51660ca643e5a49a30c84.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/mongo.js.map"
                }
              }
            },
            "/packages/jquery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/jquery.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/265926494aaa3929cd2e30da265211c5929f37a4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/265926494aaa3929cd2e30da265211c5929f37a4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/jquery.js.map"
                }
              }
            },
            "/packages/deps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/deps.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/deps.js.map"
                }
              }
            },
            "/packages/htmljs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/htmljs.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/b0108e24d5956ee910ea579c7a4ace00b4ecd4ae.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/b0108e24d5956ee910ea579c7a4ace00b4ecd4ae.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/htmljs.js.map"
                }
              }
            },
            "/packages/observe-sequence.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/observe-sequence.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/observe-sequence.js.map"
                }
              }
            },
            "/packages/reactive-var.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/reactive-var.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/reactive-var.js.map"
                }
              }
            },
            "/packages/blaze.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/blaze.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7b7ff7ee2ccdccd85a1ad0d8dc9d96193e29e8b0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7b7ff7ee2ccdccd85a1ad0d8dc9d96193e29e8b0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/blaze.js.map"
                }
              }
            },
            "/packages/accounts-base.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-base.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/94972067650078763eca7f54b72598624e0d8b9d.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/94972067650078763eca7f54b72598624e0d8b9d.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-base.js.map"
                }
              }
            },
            "/packages/service-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/service-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/service-configuration.js.map"
                }
              }
            },
            "/packages/templating.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/templating.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6420eb7dcc133dc4c49a090c3c6f31bf3ce71fe8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6420eb7dcc133dc4c49a090c3c6f31bf3ce71fe8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/templating.js.map"
                }
              }
            },
            "/packages/reactive-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/reactive-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/reactive-dict.js.map"
                }
              }
            },
            "/packages/session.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/session.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/442b1bc169c2a1fb8c1fc5420041baa1ed9cb940.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/442b1bc169c2a1fb8c1fc5420041baa1ed9cb940.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/session.js.map"
                }
              }
            },
            "/packages/sha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/sha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/sha.js.map"
                }
              }
            },
            "/packages/srp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/srp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/srp.js.map"
                }
              }
            },
            "/packages/accounts-password.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-password.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6c517b689e15ab07dd443895b7ed801683dda159.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6c517b689e15ab07dd443895b7ed801683dda159.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-password.js.map"
                }
              }
            },
            "/packages/accounts-ui-unstyled.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-ui-unstyled.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/724142103f86896bf7ab0a57672b34086f989b24.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/724142103f86896bf7ab0a57672b34086f989b24.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-ui-unstyled.js.map"
                }
              }
            },
            "/packages/less.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/less.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/less.js.map"
                }
              }
            },
            "/packages/accounts-ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1ff79db616cce9b320fe8aed6103eded31248467.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1ff79db616cce9b320fe8aed6103eded31248467.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/accounts-ui.js.map"
                }
              }
            },
            "/packages/mrt_jquery-ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/mrt_jquery-ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ccd29dc05b85d9f7fe580438f97f1735af190eb2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ccd29dc05b85d9f7fe580438f97f1735af190eb2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/mrt_jquery-ui.js.map"
                }
              }
            },
            "/packages/iron_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_core.js.map"
                }
              }
            },
            "/packages/ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/ui.js.map"
                }
              }
            },
            "/packages/iron_dynamic-template.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js.map"
                }
              }
            },
            "/packages/iron_layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_layout.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_layout.js.map"
                }
              }
            },
            "/packages/iron_router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_router.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/iron_router.js.map"
                }
              }
            },
            "/packages/splendido_accounts-templates-core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/splendido_accounts-templates-core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/09da9f45d56d06b7eced2459fb53fcab7daa2b7c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/09da9f45d56d06b7eced2459fb53fcab7daa2b7c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/splendido_accounts-templates-core.js.map"
                }
              }
            },
            "/packages/coffeescript.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/coffeescript.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/coffeescript.js.map"
                }
              }
            },
            "/packages/softwarerero_accounts-t9n.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/softwarerero_accounts-t9n.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d2d8d1d115a4cb8262d753882e538fc83571d960.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/d2d8d1d115a4cb8262d753882e538fc83571d960.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/softwarerero_accounts-t9n.js.map"
                }
              }
            },
            "/packages/splendido_accounts-templates-semantic-ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/splendido_accounts-templates-semantic-ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/baddd291b8de577420273711a125d1cfff2948d7.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/baddd291b8de577420273711a125d1cfff2948d7.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/splendido_accounts-templates-semantic-ui.js.map"
                }
              }
            },
            "/packages/nooitaf_semantic-ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/883f22b2be95bf6569643832e0401280aea97ebd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/883f22b2be95bf6569643832e0401280aea97ebd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui.js.map"
                }
              }
            },
            "/packages/sanjo_jasmine.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/73ad7def495ec4743a7124c3ecb8c6e32234b06c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/73ad7def495ec4743a7124c3ecb8c6e32234b06c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js.map"
                }
              }
            },
            "/packages/url.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/url.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/f267b683007ca477629c166b4bd43499e3122351.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/f267b683007ca477629c166b4bd43499e3122351.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/url.js.map"
                }
              }
            },
            "/packages/http.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/http.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/http.js.map"
                }
              }
            },
            "/packages/velocity_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_core.js.map"
                }
              }
            },
            "/packages/amplify.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/amplify.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/amplify.js.map"
                }
              }
            },
            "/packages/velocity_html-reporter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6c24ef7bd026690306effa4c6e77fd0c21902b5e.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6c24ef7bd026690306effa4c6e77fd0c21902b5e.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js.map"
                }
              }
            },
            "/packages/aldeed_simple-schema.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/aldeed_simple-schema.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6b088ed5394a2f8f07e9602d918d515b3acad5e6.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6b088ed5394a2f8f07e9602d918d515b3acad5e6.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/aldeed_simple-schema.js.map"
                }
              }
            },
            "/packages/mongo-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/mongo-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e6ebca489f38b73788b494509a4f83d87fdbf6c0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e6ebca489f38b73788b494509a4f83d87fdbf6c0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/mongo-livedata.js.map"
                }
              }
            },
            "/packages/aldeed_collection2.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/aldeed_collection2.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2eb03e08f9f68bafcca5bc2482243b2faca23db3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2eb03e08f9f68bafcca5bc2482243b2faca23db3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/aldeed_collection2.js.map"
                }
              }
            },
            "/packages/autoupdate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/autoupdate.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/c823646e93561d86e6bcb3cbd2457a8540e519c1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/c823646e93561d86e6bcb3cbd2457a8540e519c1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/autoupdate.js.map"
                }
              }
            },
            "/packages/meteor-platform.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/meteor-platform.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/meteor-platform.js.map"
                }
              }
            },
            "/packages/webapp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/webapp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/webapp.js.map"
                }
              }
            },
            "/packages/livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/livedata.js.map"
                }
              }
            },
            "/packages/spacebars.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/spacebars.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cb20740019f26bdca2faa89ba9c973f618118521.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cb20740019f26bdca2faa89ba9c973f618118521.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/spacebars.js.map"
                }
              }
            },
            "/packages/global-imports.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/global-imports.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/modal/collaborators/template.checklist-side.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/modal/collaborators/template.checklist-side.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/modal/collaborators/template.collaborators-name.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/modal/collaborators/template.collaborators-name.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/modal/collaborators/template.story-points-side.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/modal/collaborators/template.story-points-side.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/modal/collaborators/template.tags-side.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/modal/collaborators/template.tags-side.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/modal/task/template.task.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/modal/task/template.task.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/project/popup/template.stageCreation.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/project/popup/template.stageCreation.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/templates/loggedIn/template.loggedIn.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/templates/loggedIn/template.loggedIn.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/dashboard/template.dashboard.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/dashboard/template.dashboard.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/home/template.home.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/home/template.home.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/profile/template.profile.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/profile/template.profile.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/project/template.project.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/project/template.project.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/project/template.stage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/project/template.stage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/project/template.task.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/project/template.task.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/app.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/lib/app.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/config.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/lib/config.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/permissions.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/lib/permissions.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/modal/task/task.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/modal/task/task.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/templates/loggedIn/loggedIn.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/templates/loggedIn/loggedIn.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/home/home.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/home/home.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/project/project.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/project/project.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/project/stage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/project/stage.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/project/task.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/views/project/task.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/helpers/accounts.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/client/helpers/accounts.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/attachments.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/attachments.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/comments.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/comments.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/epics.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/epics.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/labels.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/labels.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/projects.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/projects.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/ratings.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/ratings.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/stories.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/stories.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/collections/tasks.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/collections/tasks.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/eeab8fea69b5105161910682d94d5fe06004f0b7.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/eeab8fea69b5105161910682d94d5fe06004f0b7.css"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/eeab8fea69b5105161910682d94d5fe06004f0b7.map"
                },
                "type": {
                  "type": "constant",
                  "value": "css"
                }
              }
            },
            "/eeab8fea69b5105161910682d94d5fe06004f0b7.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/eeab8fea69b5105161910682d94d5fe06004f0b7.css.map"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.otf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.otf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large-inverted.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large-inverted.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium-inverted.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium-inverted.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini-inverted.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini-inverted.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small-inverted.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small-inverted.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/spinner.gif": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/spinner.gif"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/add-member.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/img/add-member.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/class.jpg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/img/class.jpg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/denny.jpg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/img/denny.jpg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/flow-chart.jpg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/img/flow-chart.jpg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/product-sample.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/img/product-sample.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/stage-arrow.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/img/stage-arrow.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/travis.jpg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/travis/Documents/compound/.meteor/local/build/programs/web.browser/app/img/travis.jpg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "manifest.json": {
              "type": "object",
              "members": {
                "content": {
                  "type": "constant",
                  "value": "{\"manifest\":[{\"path\":\"packages/underscore.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/underscore.js?0a80a8623e1b40b5df5a05582f288ddd586eaa18\",\"sourceMap\":\"packages/underscore.js.map\",\"sourceMapUrl\":\"/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map\",\"size\":150686,\"hash\":\"0a80a8623e1b40b5df5a05582f288ddd586eaa18\"},{\"path\":\"packages/meteor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor.js?012a26290d9cb731a3b52b396e571c8159d11236\",\"sourceMap\":\"packages/meteor.js.map\",\"sourceMapUrl\":\"/packages/012a26290d9cb731a3b52b396e571c8159d11236.map\",\"size\":104598,\"hash\":\"012a26290d9cb731a3b52b396e571c8159d11236\"},{\"path\":\"packages/standard-app-packages.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/standard-app-packages.js?be7072e6abfda638502b63fa0f809c85c8c2b8ed\",\"sourceMap\":\"packages/standard-app-packages.js.map\",\"sourceMapUrl\":\"/packages/be7072e6abfda638502b63fa0f809c85c8c2b8ed.map\",\"size\":1306,\"hash\":\"be7072e6abfda638502b63fa0f809c85c8c2b8ed\"},{\"path\":\"packages/tracker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/tracker.js?192a05cc46b867dadbe8bf90dd961f6f8fd1574f\",\"sourceMap\":\"packages/tracker.js.map\",\"sourceMapUrl\":\"/packages/192a05cc46b867dadbe8bf90dd961f6f8fd1574f.map\",\"size\":66854,\"hash\":\"192a05cc46b867dadbe8bf90dd961f6f8fd1574f\"},{\"path\":\"packages/random.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/random.js?fe7b46080c91ce482acf6fc326afbc5b176f0502\",\"sourceMap\":\"packages/random.js.map\",\"sourceMapUrl\":\"/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map\",\"size\":24099,\"hash\":\"fe7b46080c91ce482acf6fc326afbc5b176f0502\"},{\"path\":\"packages/localstorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/localstorage.js?9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\",\"sourceMap\":\"packages/localstorage.js.map\",\"sourceMapUrl\":\"/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map\",\"size\":7092,\"hash\":\"9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\"},{\"path\":\"packages/json.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/json.js?e22856eae714c681199eabc5c0710b904b125554\",\"sourceMap\":\"packages/json.js.map\",\"sourceMapUrl\":\"/packages/e22856eae714c681199eabc5c0710b904b125554.map\",\"size\":58343,\"hash\":\"e22856eae714c681199eabc5c0710b904b125554\"},{\"path\":\"packages/base64.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/base64.js?1a63019243b73298e2964e6d4680f25bca657726\",\"sourceMap\":\"packages/base64.js.map\",\"sourceMapUrl\":\"/packages/1a63019243b73298e2964e6d4680f25bca657726.map\",\"size\":15685,\"hash\":\"1a63019243b73298e2964e6d4680f25bca657726\"},{\"path\":\"packages/ejson.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ejson.js?71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\",\"sourceMap\":\"packages/ejson.js.map\",\"sourceMapUrl\":\"/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map\",\"size\":81471,\"hash\":\"71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\"},{\"path\":\"packages/check.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/check.js?803a2be518a0c6c3949e45cf65c4ad627a3d603a\",\"sourceMap\":\"packages/check.js.map\",\"sourceMapUrl\":\"/packages/803a2be518a0c6c3949e45cf65c4ad627a3d603a.map\",\"size\":35207,\"hash\":\"803a2be518a0c6c3949e45cf65c4ad627a3d603a\"},{\"path\":\"packages/logging.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/logging.js?07e201b648f16be8435a4f666156995eeda0c750\",\"sourceMap\":\"packages/logging.js.map\",\"sourceMapUrl\":\"/packages/07e201b648f16be8435a4f666156995eeda0c750.map\",\"size\":27996,\"hash\":\"07e201b648f16be8435a4f666156995eeda0c750\"},{\"path\":\"packages/retry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/retry.js?1f1dd2c35d300110fdaba51ce4473583bc3bf031\",\"sourceMap\":\"packages/retry.js.map\",\"sourceMapUrl\":\"/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map\",\"size\":7245,\"hash\":\"1f1dd2c35d300110fdaba51ce4473583bc3bf031\"},{\"path\":\"packages/reload.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reload.js?92c60ae92333f52459da974d9158da7fedeb6375\",\"sourceMap\":\"packages/reload.js.map\",\"sourceMapUrl\":\"/packages/92c60ae92333f52459da974d9158da7fedeb6375.map\",\"size\":28228,\"hash\":\"92c60ae92333f52459da974d9158da7fedeb6375\"},{\"path\":\"packages/id-map.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/id-map.js?9ea6eaae8d74693ce2505a858d9a5e60cf191298\",\"sourceMap\":\"packages/id-map.js.map\",\"sourceMapUrl\":\"/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map\",\"size\":8584,\"hash\":\"9ea6eaae8d74693ce2505a858d9a5e60cf191298\"},{\"path\":\"packages/ordered-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ordered-dict.js?bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\",\"sourceMap\":\"packages/ordered-dict.js.map\",\"sourceMapUrl\":\"/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map\",\"size\":20395,\"hash\":\"bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\"},{\"path\":\"packages/geojson-utils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/geojson-utils.js?81b79d5cf96d00b4b7a28987debcffb665c17526\",\"sourceMap\":\"packages/geojson-utils.js.map\",\"sourceMapUrl\":\"/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map\",\"size\":48339,\"hash\":\"81b79d5cf96d00b4b7a28987debcffb665c17526\"},{\"path\":\"packages/minimongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/minimongo.js?9005f7df7e2bef877712fee40d7b14aa8f5d4f8b\",\"sourceMap\":\"packages/minimongo.js.map\",\"sourceMapUrl\":\"/packages/9005f7df7e2bef877712fee40d7b14aa8f5d4f8b.map\",\"size\":427384,\"hash\":\"9005f7df7e2bef877712fee40d7b14aa8f5d4f8b\"},{\"path\":\"packages/ddp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ddp.js?ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6\",\"sourceMap\":\"packages/ddp.js.map\",\"sourceMapUrl\":\"/packages/ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6.map\",\"size\":617168,\"hash\":\"ed3a8b20e91a598de5b24a7c98c5ae4be1c0f9e6\"},{\"path\":\"packages/follower-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/follower-livedata.js?74156c6baa89da861fc4ddb58ef158eac71e58e0\",\"sourceMap\":\"packages/follower-livedata.js.map\",\"sourceMapUrl\":\"/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map\",\"size\":1490,\"hash\":\"74156c6baa89da861fc4ddb58ef158eac71e58e0\"},{\"path\":\"packages/application-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/application-configuration.js?dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\",\"sourceMap\":\"packages/application-configuration.js.map\",\"sourceMapUrl\":\"/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map\",\"size\":1485,\"hash\":\"dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\"},{\"path\":\"packages/mongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo.js?9bc2c5a8b2796fab86b51660ca643e5a49a30c84\",\"sourceMap\":\"packages/mongo.js.map\",\"sourceMapUrl\":\"/packages/9bc2c5a8b2796fab86b51660ca643e5a49a30c84.map\",\"size\":146178,\"hash\":\"9bc2c5a8b2796fab86b51660ca643e5a49a30c84\"},{\"path\":\"packages/jquery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/jquery.js?265926494aaa3929cd2e30da265211c5929f37a4\",\"sourceMap\":\"packages/jquery.js.map\",\"sourceMapUrl\":\"/packages/265926494aaa3929cd2e30da265211c5929f37a4.map\",\"size\":1295407,\"hash\":\"265926494aaa3929cd2e30da265211c5929f37a4\"},{\"path\":\"packages/deps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/deps.js?504589e1e9585dec8f9f6094e5a87b22de3783a1\",\"sourceMap\":\"packages/deps.js.map\",\"sourceMapUrl\":\"/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map\",\"size\":1442,\"hash\":\"504589e1e9585dec8f9f6094e5a87b22de3783a1\"},{\"path\":\"packages/htmljs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/htmljs.js?b0108e24d5956ee910ea579c7a4ace00b4ecd4ae\",\"sourceMap\":\"packages/htmljs.js.map\",\"sourceMapUrl\":\"/packages/b0108e24d5956ee910ea579c7a4ace00b4ecd4ae.map\",\"size\":110439,\"hash\":\"b0108e24d5956ee910ea579c7a4ace00b4ecd4ae\"},{\"path\":\"packages/observe-sequence.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/observe-sequence.js?2fd807ea171ead273b9e6458607cb226012d9240\",\"sourceMap\":\"packages/observe-sequence.js.map\",\"sourceMapUrl\":\"/packages/2fd807ea171ead273b9e6458607cb226012d9240.map\",\"size\":30271,\"hash\":\"2fd807ea171ead273b9e6458607cb226012d9240\"},{\"path\":\"packages/reactive-var.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-var.js?20335b7b37165980ddd9f23943b2e5b00aae1cc2\",\"sourceMap\":\"packages/reactive-var.js.map\",\"sourceMapUrl\":\"/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map\",\"size\":13963,\"hash\":\"20335b7b37165980ddd9f23943b2e5b00aae1cc2\"},{\"path\":\"packages/blaze.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/blaze.js?7b7ff7ee2ccdccd85a1ad0d8dc9d96193e29e8b0\",\"sourceMap\":\"packages/blaze.js.map\",\"sourceMapUrl\":\"/packages/7b7ff7ee2ccdccd85a1ad0d8dc9d96193e29e8b0.map\",\"size\":380068,\"hash\":\"7b7ff7ee2ccdccd85a1ad0d8dc9d96193e29e8b0\"},{\"path\":\"packages/accounts-base.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-base.js?94972067650078763eca7f54b72598624e0d8b9d\",\"sourceMap\":\"packages/accounts-base.js.map\",\"sourceMapUrl\":\"/packages/94972067650078763eca7f54b72598624e0d8b9d.map\",\"size\":96808,\"hash\":\"94972067650078763eca7f54b72598624e0d8b9d\"},{\"path\":\"packages/service-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/service-configuration.js?262da6fb1e9c97be84333c429c9a2929c80f8e3b\",\"sourceMap\":\"packages/service-configuration.js.map\",\"sourceMapUrl\":\"/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map\",\"size\":5082,\"hash\":\"262da6fb1e9c97be84333c429c9a2929c80f8e3b\"},{\"path\":\"packages/templating.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/templating.js?6420eb7dcc133dc4c49a090c3c6f31bf3ce71fe8\",\"sourceMap\":\"packages/templating.js.map\",\"sourceMapUrl\":\"/packages/6420eb7dcc133dc4c49a090c3c6f31bf3ce71fe8.map\",\"size\":10464,\"hash\":\"6420eb7dcc133dc4c49a090c3c6f31bf3ce71fe8\"},{\"path\":\"packages/reactive-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-dict.js?6b25309b1f0dcf775b44984324878d6f8ad1abc2\",\"sourceMap\":\"packages/reactive-dict.js.map\",\"sourceMapUrl\":\"/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map\",\"size\":19802,\"hash\":\"6b25309b1f0dcf775b44984324878d6f8ad1abc2\"},{\"path\":\"packages/session.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/session.js?442b1bc169c2a1fb8c1fc5420041baa1ed9cb940\",\"sourceMap\":\"packages/session.js.map\",\"sourceMapUrl\":\"/packages/442b1bc169c2a1fb8c1fc5420041baa1ed9cb940.map\",\"size\":6487,\"hash\":\"442b1bc169c2a1fb8c1fc5420041baa1ed9cb940\"},{\"path\":\"packages/sha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sha.js?65ef52f7221944768bfc2049d6b7e163c8ae2615\",\"sourceMap\":\"packages/sha.js.map\",\"sourceMapUrl\":\"/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map\",\"size\":19584,\"hash\":\"65ef52f7221944768bfc2049d6b7e163c8ae2615\"},{\"path\":\"packages/srp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/srp.js?e2e28156e8c912d504a3586351c8a1119f664cfd\",\"sourceMap\":\"packages/srp.js.map\",\"sourceMapUrl\":\"/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map\",\"size\":173470,\"hash\":\"e2e28156e8c912d504a3586351c8a1119f664cfd\"},{\"path\":\"packages/accounts-password.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-password.js?6c517b689e15ab07dd443895b7ed801683dda159\",\"sourceMap\":\"packages/accounts-password.js.map\",\"sourceMapUrl\":\"/packages/6c517b689e15ab07dd443895b7ed801683dda159.map\",\"size\":33053,\"hash\":\"6c517b689e15ab07dd443895b7ed801683dda159\"},{\"path\":\"packages/accounts-ui-unstyled.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-ui-unstyled.js?724142103f86896bf7ab0a57672b34086f989b24\",\"sourceMap\":\"packages/accounts-ui-unstyled.js.map\",\"sourceMapUrl\":\"/packages/724142103f86896bf7ab0a57672b34086f989b24.map\",\"size\":241869,\"hash\":\"724142103f86896bf7ab0a57672b34086f989b24\"},{\"path\":\"packages/less.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/less.js?7d1bf981a25a449d6270558bcfc983313c40cd26\",\"sourceMap\":\"packages/less.js.map\",\"sourceMapUrl\":\"/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map\",\"size\":1286,\"hash\":\"7d1bf981a25a449d6270558bcfc983313c40cd26\"},{\"path\":\"packages/accounts-ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-ui.js?1ff79db616cce9b320fe8aed6103eded31248467\",\"sourceMap\":\"packages/accounts-ui.js.map\",\"sourceMapUrl\":\"/packages/1ff79db616cce9b320fe8aed6103eded31248467.map\",\"size\":1346,\"hash\":\"1ff79db616cce9b320fe8aed6103eded31248467\"},{\"path\":\"packages/mrt_jquery-ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mrt_jquery-ui.js?ccd29dc05b85d9f7fe580438f97f1735af190eb2\",\"sourceMap\":\"packages/mrt_jquery-ui.js.map\",\"sourceMapUrl\":\"/packages/ccd29dc05b85d9f7fe580438f97f1735af190eb2.map\",\"size\":1901351,\"hash\":\"ccd29dc05b85d9f7fe580438f97f1735af190eb2\"},{\"path\":\"packages/iron_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_core.js?fe41a023a7a6f1ded90b0729437928a8ddccc7d4\",\"sourceMap\":\"packages/iron_core.js.map\",\"sourceMapUrl\":\"/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map\",\"size\":31679,\"hash\":\"fe41a023a7a6f1ded90b0729437928a8ddccc7d4\"},{\"path\":\"packages/ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ui.js?5a663333fd30f8fd913f110e0ef779e84f67c4b8\",\"sourceMap\":\"packages/ui.js.map\",\"sourceMapUrl\":\"/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map\",\"size\":1529,\"hash\":\"5a663333fd30f8fd913f110e0ef779e84f67c4b8\"},{\"path\":\"packages/iron_dynamic-template.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_dynamic-template.js?32038885cb1dad7957291ffebfffcb7f8cd57d20\",\"sourceMap\":\"packages/iron_dynamic-template.js.map\",\"sourceMapUrl\":\"/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map\",\"size\":51775,\"hash\":\"32038885cb1dad7957291ffebfffcb7f8cd57d20\"},{\"path\":\"packages/iron_layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_layout.js?080dc95e770e3130757bf6af69fd0abb99573ae4\",\"sourceMap\":\"packages/iron_layout.js.map\",\"sourceMapUrl\":\"/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map\",\"size\":56973,\"hash\":\"080dc95e770e3130757bf6af69fd0abb99573ae4\"},{\"path\":\"packages/iron_router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_router.js?da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\",\"sourceMap\":\"packages/iron_router.js.map\",\"sourceMapUrl\":\"/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map\",\"size\":250621,\"hash\":\"da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\"},{\"path\":\"packages/splendido_accounts-templates-core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/splendido_accounts-templates-core.js?09da9f45d56d06b7eced2459fb53fcab7daa2b7c\",\"sourceMap\":\"packages/splendido_accounts-templates-core.js.map\",\"sourceMapUrl\":\"/packages/09da9f45d56d06b7eced2459fb53fcab7daa2b7c.map\",\"size\":226562,\"hash\":\"09da9f45d56d06b7eced2459fb53fcab7daa2b7c\"},{\"path\":\"packages/coffeescript.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/coffeescript.js?969f68786bbc68e6cad299e74922a53af3d1404b\",\"sourceMap\":\"packages/coffeescript.js.map\",\"sourceMapUrl\":\"/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map\",\"size\":1294,\"hash\":\"969f68786bbc68e6cad299e74922a53af3d1404b\"},{\"path\":\"packages/softwarerero_accounts-t9n.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/softwarerero_accounts-t9n.js?d2d8d1d115a4cb8262d753882e538fc83571d960\",\"sourceMap\":\"packages/softwarerero_accounts-t9n.js.map\",\"sourceMapUrl\":\"/packages/d2d8d1d115a4cb8262d753882e538fc83571d960.map\",\"size\":105833,\"hash\":\"d2d8d1d115a4cb8262d753882e538fc83571d960\"},{\"path\":\"packages/splendido_accounts-templates-semantic-ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/splendido_accounts-templates-semantic-ui.js?baddd291b8de577420273711a125d1cfff2948d7\",\"sourceMap\":\"packages/splendido_accounts-templates-semantic-ui.js.map\",\"sourceMapUrl\":\"/packages/baddd291b8de577420273711a125d1cfff2948d7.map\",\"size\":79110,\"hash\":\"baddd291b8de577420273711a125d1cfff2948d7\"},{\"path\":\"packages/nooitaf_semantic-ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/nooitaf_semantic-ui.js?883f22b2be95bf6569643832e0401280aea97ebd\",\"sourceMap\":\"packages/nooitaf_semantic-ui.js.map\",\"sourceMapUrl\":\"/packages/883f22b2be95bf6569643832e0401280aea97ebd.map\",\"size\":1552439,\"hash\":\"883f22b2be95bf6569643832e0401280aea97ebd\"},{\"path\":\"packages/sanjo_jasmine.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sanjo_jasmine.js?73ad7def495ec4743a7124c3ecb8c6e32234b06c\",\"sourceMap\":\"packages/sanjo_jasmine.js.map\",\"sourceMapUrl\":\"/packages/73ad7def495ec4743a7124c3ecb8c6e32234b06c.map\",\"size\":552726,\"hash\":\"73ad7def495ec4743a7124c3ecb8c6e32234b06c\"},{\"path\":\"packages/url.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/url.js?f267b683007ca477629c166b4bd43499e3122351\",\"sourceMap\":\"packages/url.js.map\",\"sourceMapUrl\":\"/packages/f267b683007ca477629c166b4bd43499e3122351.map\",\"size\":6612,\"hash\":\"f267b683007ca477629c166b4bd43499e3122351\"},{\"path\":\"packages/http.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/http.js?9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\",\"sourceMap\":\"packages/http.js.map\",\"sourceMapUrl\":\"/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map\",\"size\":37036,\"hash\":\"9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\"},{\"path\":\"packages/velocity_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_core.js?6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a\",\"sourceMap\":\"packages/velocity_core.js.map\",\"sourceMapUrl\":\"/packages/6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a.map\",\"size\":6854,\"hash\":\"6ca46c76b400ce620d5a99a1a6edfec60ca0ba1a\"},{\"path\":\"packages/amplify.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/amplify.js?0943ecb804169b991257a319fa92b9e6f34e2d1b\",\"sourceMap\":\"packages/amplify.js.map\",\"sourceMapUrl\":\"/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map\",\"size\":88428,\"hash\":\"0943ecb804169b991257a319fa92b9e6f34e2d1b\"},{\"path\":\"packages/velocity_html-reporter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_html-reporter.js?6c24ef7bd026690306effa4c6e77fd0c21902b5e\",\"sourceMap\":\"packages/velocity_html-reporter.js.map\",\"sourceMapUrl\":\"/packages/6c24ef7bd026690306effa4c6e77fd0c21902b5e.map\",\"size\":83898,\"hash\":\"6c24ef7bd026690306effa4c6e77fd0c21902b5e\"},{\"path\":\"packages/aldeed_simple-schema.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/aldeed_simple-schema.js?6b088ed5394a2f8f07e9602d918d515b3acad5e6\",\"sourceMap\":\"packages/aldeed_simple-schema.js.map\",\"sourceMapUrl\":\"/packages/6b088ed5394a2f8f07e9602d918d515b3acad5e6.map\",\"size\":471515,\"hash\":\"6b088ed5394a2f8f07e9602d918d515b3acad5e6\"},{\"path\":\"packages/mongo-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo-livedata.js?e6ebca489f38b73788b494509a4f83d87fdbf6c0\",\"sourceMap\":\"packages/mongo-livedata.js.map\",\"sourceMapUrl\":\"/packages/e6ebca489f38b73788b494509a4f83d87fdbf6c0.map\",\"size\":1299,\"hash\":\"e6ebca489f38b73788b494509a4f83d87fdbf6c0\"},{\"path\":\"packages/aldeed_collection2.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/aldeed_collection2.js?2eb03e08f9f68bafcca5bc2482243b2faca23db3\",\"sourceMap\":\"packages/aldeed_collection2.js.map\",\"sourceMapUrl\":\"/packages/2eb03e08f9f68bafcca5bc2482243b2faca23db3.map\",\"size\":68728,\"hash\":\"2eb03e08f9f68bafcca5bc2482243b2faca23db3\"},{\"path\":\"packages/autoupdate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/autoupdate.js?c823646e93561d86e6bcb3cbd2457a8540e519c1\",\"sourceMap\":\"packages/autoupdate.js.map\",\"sourceMapUrl\":\"/packages/c823646e93561d86e6bcb3cbd2457a8540e519c1.map\",\"size\":17152,\"hash\":\"c823646e93561d86e6bcb3cbd2457a8540e519c1\"},{\"path\":\"packages/meteor-platform.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor-platform.js?499a2f8522e25820b1153c69a92751ccaae507b3\",\"sourceMap\":\"packages/meteor-platform.js.map\",\"sourceMapUrl\":\"/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map\",\"size\":1384,\"hash\":\"499a2f8522e25820b1153c69a92751ccaae507b3\"},{\"path\":\"packages/webapp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/webapp.js?e1be090051b82f046484dccc2de7d747e50c7328\",\"sourceMap\":\"packages/webapp.js.map\",\"sourceMapUrl\":\"/packages/e1be090051b82f046484dccc2de7d747e50c7328.map\",\"size\":3106,\"hash\":\"e1be090051b82f046484dccc2de7d747e50c7328\"},{\"path\":\"packages/livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/livedata.js?718526445deb4d9baacb6d92c551adea1d36c1e1\",\"sourceMap\":\"packages/livedata.js.map\",\"sourceMapUrl\":\"/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map\",\"size\":1413,\"hash\":\"718526445deb4d9baacb6d92c551adea1d36c1e1\"},{\"path\":\"packages/spacebars.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/spacebars.js?cb20740019f26bdca2faa89ba9c973f618118521\",\"sourceMap\":\"packages/spacebars.js.map\",\"sourceMapUrl\":\"/packages/cb20740019f26bdca2faa89ba9c973f618118521.map\",\"size\":41807,\"hash\":\"cb20740019f26bdca2faa89ba9c973f618118521\"},{\"path\":\"packages/global-imports.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/global-imports.js?93b39eb149501f2fdec934ae8d3ffc018e48e2f0\",\"size\":1184,\"hash\":\"93b39eb149501f2fdec934ae8d3ffc018e48e2f0\"},{\"path\":\"app/client/views/modal/collaborators/template.checklist-side.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/modal/collaborators/template.checklist-side.js?604b8029a768abbf567422de61d9228b8ef60b63\",\"size\":860,\"hash\":\"604b8029a768abbf567422de61d9228b8ef60b63\"},{\"path\":\"app/client/views/modal/collaborators/template.collaborators-name.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/modal/collaborators/template.collaborators-name.js?c62dba735dbe40b88a7054213e5af64e0bf1af80\",\"size\":1363,\"hash\":\"c62dba735dbe40b88a7054213e5af64e0bf1af80\"},{\"path\":\"app/client/views/modal/collaborators/template.story-points-side.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/modal/collaborators/template.story-points-side.js?acc3c5c50fc89b7ab51af9c207aded4bc0405dc7\",\"size\":1382,\"hash\":\"acc3c5c50fc89b7ab51af9c207aded4bc0405dc7\"},{\"path\":\"app/client/views/modal/collaborators/template.tags-side.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/modal/collaborators/template.tags-side.js?4a124b0056d898c76603734f048fb90941fcbfca\",\"size\":956,\"hash\":\"4a124b0056d898c76603734f048fb90941fcbfca\"},{\"path\":\"app/client/views/modal/task/template.task.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/modal/task/template.task.js?174f04b927d4627e89729645cfbed29ee95e3d17\",\"size\":7988,\"hash\":\"174f04b927d4627e89729645cfbed29ee95e3d17\"},{\"path\":\"app/client/views/project/popup/template.stageCreation.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/project/popup/template.stageCreation.js?98779a86cab4dac20556e3bb009053263ff72766\",\"size\":328,\"hash\":\"98779a86cab4dac20556e3bb009053263ff72766\"},{\"path\":\"app/client/views/templates/loggedIn/template.loggedIn.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/templates/loggedIn/template.loggedIn.js?98356343e974e3b8ae1df99874293d872113d6ab\",\"size\":3091,\"hash\":\"98356343e974e3b8ae1df99874293d872113d6ab\"},{\"path\":\"app/client/views/dashboard/template.dashboard.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/dashboard/template.dashboard.js?bcbca03b14e18d136cb77029de349dd1cdc7e785\",\"size\":186,\"hash\":\"bcbca03b14e18d136cb77029de349dd1cdc7e785\"},{\"path\":\"app/client/views/home/template.home.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/home/template.home.js?6cfe5dfd35880bf41b6fa329c4edfde5b8b0acff\",\"size\":376,\"hash\":\"6cfe5dfd35880bf41b6fa329c4edfde5b8b0acff\"},{\"path\":\"app/client/views/profile/template.profile.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/profile/template.profile.js?3bffe4844b330eff6db36f5d47e5cef13b4fbf7f\",\"size\":179,\"hash\":\"3bffe4844b330eff6db36f5d47e5cef13b4fbf7f\"},{\"path\":\"app/client/views/project/template.project.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/project/template.project.js?80fabb00a6dedb3ab4b18b20b2552ee38d8b28d3\",\"size\":18878,\"hash\":\"80fabb00a6dedb3ab4b18b20b2552ee38d8b28d3\"},{\"path\":\"app/client/views/project/template.stage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/project/template.stage.js?81e5f79923b57dc41988b3b01bec1daffc71ed29\",\"size\":811,\"hash\":\"81e5f79923b57dc41988b3b01bec1daffc71ed29\"},{\"path\":\"app/client/views/project/template.task.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/project/template.task.js?d3a0a6ad7929130d794dff3dc78a996b3eaca20d\",\"size\":496,\"hash\":\"d3a0a6ad7929130d794dff3dc78a996b3eaca20d\"},{\"path\":\"app/lib/app.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/app.js?1eb3d6af09716d9d6c28054ba56c2d1368063349\",\"size\":475,\"hash\":\"1eb3d6af09716d9d6c28054ba56c2d1368063349\"},{\"path\":\"app/lib/config.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/config.js?5657d6ea4ed6f278262b44b56fd46e008286d9e0\",\"size\":77,\"hash\":\"5657d6ea4ed6f278262b44b56fd46e008286d9e0\"},{\"path\":\"app/lib/permissions.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/permissions.js?95f43cdc5b2e7017d3208b7f33f62b13be7ef56b\",\"size\":153,\"hash\":\"95f43cdc5b2e7017d3208b7f33f62b13be7ef56b\"},{\"path\":\"app/client/views/modal/task/task.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/modal/task/task.js?f428bcd9c265de74dbc39a89d9954d79aefe31a8\",\"size\":2290,\"hash\":\"f428bcd9c265de74dbc39a89d9954d79aefe31a8\"},{\"path\":\"app/client/views/templates/loggedIn/loggedIn.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/templates/loggedIn/loggedIn.js?dd9cdde1d40c2d7a2c83515ee542645290be0b17\",\"size\":1234,\"hash\":\"dd9cdde1d40c2d7a2c83515ee542645290be0b17\"},{\"path\":\"app/client/views/home/home.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/home/home.js?1866798d3ce480a1796d8db5650bfcb50a0c9802\",\"size\":318,\"hash\":\"1866798d3ce480a1796d8db5650bfcb50a0c9802\"},{\"path\":\"app/client/views/project/project.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/project/project.js?9ce876c68a8b46121cabaada0b0263fd3dab8ed6\",\"size\":7832,\"hash\":\"9ce876c68a8b46121cabaada0b0263fd3dab8ed6\"},{\"path\":\"app/client/views/project/stage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/project/stage.js?5a0bd8ff03ee564cef138909bafa7e87e3d43340\",\"size\":88,\"hash\":\"5a0bd8ff03ee564cef138909bafa7e87e3d43340\"},{\"path\":\"app/client/views/project/task.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/project/task.js?2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\",\"size\":19,\"hash\":\"2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\"},{\"path\":\"app/client/helpers/accounts.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/helpers/accounts.js?2608ba050c7b8c937cf17e0b1539746eb7972ca2\",\"size\":223,\"hash\":\"2608ba050c7b8c937cf17e0b1539746eb7972ca2\"},{\"path\":\"app/collections/attachments.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/attachments.js?2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\",\"size\":19,\"hash\":\"2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\"},{\"path\":\"app/collections/comments.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/comments.js?7ebca3eb71c59ed083b8b6a95f5917f67b571efa\",\"size\":2341,\"hash\":\"7ebca3eb71c59ed083b8b6a95f5917f67b571efa\"},{\"path\":\"app/collections/epics.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/epics.js?2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\",\"size\":19,\"hash\":\"2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\"},{\"path\":\"app/collections/labels.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/labels.js?2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\",\"size\":19,\"hash\":\"2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\"},{\"path\":\"app/collections/projects.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/projects.js?3ddc9dd600196f7880186f7705763d19fe0c55f9\",\"size\":2674,\"hash\":\"3ddc9dd600196f7880186f7705763d19fe0c55f9\"},{\"path\":\"app/collections/ratings.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/ratings.js?2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\",\"size\":19,\"hash\":\"2a3453bba5b8f7e5a39caf4f0fb6016f1b588104\"},{\"path\":\"app/collections/stories.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/stories.js?09fcca18338060aeea272cf72fc96fbf6e23680b\",\"size\":2639,\"hash\":\"09fcca18338060aeea272cf72fc96fbf6e23680b\"},{\"path\":\"app/collections/tasks.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/collections/tasks.js?ed3945be0595bf390bd2c12763f178690d28b2e7\",\"size\":2371,\"hash\":\"ed3945be0595bf390bd2c12763f178690d28b2e7\"},{\"path\":\"eeab8fea69b5105161910682d94d5fe06004f0b7.css\",\"where\":\"client\",\"type\":\"css\",\"cacheable\":true,\"url\":\"/eeab8fea69b5105161910682d94d5fe06004f0b7.css\",\"sourceMap\":\"eeab8fea69b5105161910682d94d5fe06004f0b7.css.map\",\"sourceMapUrl\":\"/eeab8fea69b5105161910682d94d5fe06004f0b7.map\",\"size\":480096,\"hash\":\"eeab8fea69b5105161910682d94d5fe06004f0b7\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.eot\",\"size\":40166,\"hash\":\"f5e824186bc1d712d5703c872135ef0e786cabf8\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.svg\",\"size\":64121,\"hash\":\"144958374a5b188939a4ef8a578ba46ffdc8ba61\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.ttf\",\"size\":39924,\"hash\":\"aa384f8e70fe7d54b7ed05ecd2c2ec13a01fad77\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/basic.icons.woff\",\"size\":24676,\"hash\":\"6ec5c193dd77b2c65af67806c13b83384ff617c9\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.eot\",\"size\":37405,\"hash\":\"d7e77928069bdd227f291b9a2c9bdd918793e529\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.otf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.otf\",\"size\":61896,\"hash\":\"82a7ff73f96e2f6ef419d2d9fd520b4c93bdae7c\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.svg\",\"size\":197829,\"hash\":\"8419c95027e27da84c7d7aa4df7f61d1dd04af81\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.ttf\",\"size\":79076,\"hash\":\"c019e0e02b24f99ca8eef73cfe3d134e904f323a\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/fonts/icons.woff\",\"size\":43572,\"hash\":\"12f8c193902e99348493ace32e498031bf79b654\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large-inverted.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large-inverted.gif\",\"size\":10168,\"hash\":\"6f09544fe0b6e2fe57a4f2d9487cfee183d2fffe\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-large.gif\",\"size\":8492,\"hash\":\"bb9b0f2f1a67dbd00edf250517cbb0a0efac66d5\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium-inverted.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium-inverted.gif\",\"size\":5384,\"hash\":\"5df5395b7f5f72e2b0f59c3901e677f7e80b6c53\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-medium.gif\",\"size\":4472,\"hash\":\"ac6ae1785858b42f3bb99c20f0ac7ca0ed503e85\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini-inverted.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini-inverted.gif\",\"size\":2722,\"hash\":\"fdede2a0f465d7119c8bc04c82db4a49a4944657\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-mini.gif\",\"size\":2548,\"hash\":\"7455fdbfe313e7aaa96cdb7fa561fb923b3bf7bc\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small-inverted.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small-inverted.gif\",\"size\":4241,\"hash\":\"bac72b19ee2aa0edea93693943e950c783ad5fa2\"},{\"path\":\"packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/nooitaf_semantic-ui/lib/semantic-ui/build/uncompressed/images/loader-small.gif\",\"size\":3447,\"hash\":\"ebaa2d25a006d16e1bd0c09b078865b9cbc0ca92\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.eot\",\"size\":14079,\"hash\":\"d53dff38dfb5c414015dfb31d30a473c95b50904\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.ttf\",\"size\":29512,\"hash\":\"c427041d38cd6597ae7e758028ab72756849ec26\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.woff\",\"size\":16448,\"hash\":\"c707207e52ffe555a36880e9873d146c226e3533\"},{\"path\":\"packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/bootstrap/src/fonts/glyphicons-halflings-regular.svg\",\"size\":63157,\"hash\":\"796e58aedfcfe8a3b0829bc0594f739936a9d7d0\"},{\"path\":\"packages/velocity_html-reporter/lib/spinner.gif\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/spinner.gif\",\"size\":1849,\"hash\":\"dcabdd743fd3e9d7bd5647abeb86e66a3e6f9597\"},{\"path\":\"app/img/add-member.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/add-member.png\",\"size\":227,\"hash\":\"903101494738052696c0c25bc28bc709b7057856\"},{\"path\":\"app/img/class.jpg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/class.jpg\",\"size\":7255,\"hash\":\"995a5141bc3abc2edf66013887068ce962a7dd23\"},{\"path\":\"app/img/denny.jpg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/denny.jpg\",\"size\":417436,\"hash\":\"80f4dd213cdaa284a1a8babed35b098c6d0623a8\"},{\"path\":\"app/img/flow-chart.jpg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/flow-chart.jpg\",\"size\":4276,\"hash\":\"40b27eccf2a3f8d4e4debb7bedc8bdb1ab719c24\"},{\"path\":\"app/img/product-sample.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/product-sample.png\",\"size\":2205,\"hash\":\"1d09437953a1e7e8f6472a0b133438f31b1fe4b9\"},{\"path\":\"app/img/stage-arrow.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/stage-arrow.png\",\"size\":8385,\"hash\":\"14b7c3277845a17d32f8afa1a08d1b93fe58196f\"},{\"path\":\"app/img/travis.jpg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/travis.jpg\",\"size\":127866,\"hash\":\"5950608490180b4cf78d3314dde2df4ce90d3527\"}],\"version\":\"ec921ac677959aaa68fba9e61dd5c97f19d196a4\"}"
                },
                "type": {
                  "type": "constant",
                  "value": "json"
                }
              }
            }
          }
        },
        "inlineScriptsAllowed": {
          "type": "function"
        },
        "setInlineScriptsAllowed": {
          "type": "function"
        },
        "setBundledJsCssPrefix": {
          "type": "function"
        },
        "addStaticJs": {
          "type": "function"
        },
        "getBoilerplate": {
          "type": "function"
        },
        "additionalStaticJs": {
          "type": "object"
        }
      }
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "calculateVersion": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "follower-livedata": {
    "Follower": {
      "type": "object",
      "members": {
        "connect": {
          "type": "function"
        }
      }
    }
  },
  "application-configuration": {
    "AppConfig": {
      "type": "object",
      "members": {
        "findGalaxy": {
          "type": "function"
        },
        "getAppConfig": {
          "type": "function"
        },
        "getStarForThisJob": {
          "type": "function"
        },
        "configurePackage": {
          "type": "function"
        },
        "configureService": {
          "type": "function"
        }
      }
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "attachSchema": {
                  "type": "function"
                },
                "simpleSchema": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "accounts-base": {
    "Accounts": {
      "type": "object",
      "members": {
        "config": {
          "type": "function"
        },
        "LoginCancelledError": {
          "type": "function",
          "members": {
            "numericError": {
              "type": "constant",
              "value": 145546287
            }
          }
        },
        "validateLoginAttempt": {
          "type": "function"
        },
        "onLogin": {
          "type": "function"
        },
        "onLoginFailure": {
          "type": "function"
        },
        "registerLoginHandler": {
          "type": "function"
        },
        "destroyToken": {
          "type": "function"
        },
        "onCreateUser": {
          "type": "function"
        },
        "insertUserDoc": {
          "type": "function"
        },
        "validateNewUser": {
          "type": "function"
        },
        "updateOrCreateUserFromExternalService": {
          "type": "function"
        },
        "addAutopublishFields": {
          "type": "function"
        },
        "urls": {
          "type": "object",
          "members": {
            "resetPassword": {
              "type": "function"
            },
            "verifyEmail": {
              "type": "function"
            },
            "enrollAccount": {
              "type": "function"
            }
          }
        },
        "emailTemplates": {
          "type": "object",
          "members": {
            "from": {
              "type": "constant",
              "value": "Meteor Accounts <no-reply@meteor.com>"
            },
            "siteName": {
              "type": "constant",
              "value": "localhost:3000"
            },
            "resetPassword": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            }
          }
        },
        "setPassword": {
          "type": "function"
        },
        "sendResetPasswordEmail": {
          "type": "function"
        },
        "sendEnrollmentEmail": {
          "type": "function"
        },
        "sendVerificationEmail": {
          "type": "function"
        },
        "createUser": {
          "type": "function"
        },
        "loginServiceConfiguration": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            },
            "attachSchema": {
              "type": "function"
            },
            "simpleSchema": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  },
  "sha": {
    "SHA256": {
      "type": "function"
    }
  },
  "srp": {
    "SRP": {
      "type": "object",
      "members": {
        "generateVerifier": {
          "type": "function"
        },
        "matchVerifier": {
          "type": "object",
          "members": {
            "identity": {
              "type": "function",
              "refID": 4
            },
            "salt": {
              "ref": 4
            },
            "verifier": {
              "ref": 4
            }
          }
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "accounts-password": {},
  "mrt:jquery-ui": {},
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:core": {
    "Iron": {
      "type": "object",
      "members": {
        "utils": {
          "type": "object",
          "members": {
            "assert": {
              "type": "function"
            },
            "warn": {
              "type": "function"
            },
            "defaultValue": {
              "type": "function"
            },
            "inherits": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "namespace": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "classCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            },
            "notifyDeprecated": {
              "type": "function"
            },
            "withDeprecatedNotice": {
              "type": "function"
            },
            "debug": {
              "type": "function"
            }
          }
        },
        "DynamicTemplate": {
          "type": "function",
          "members": {
            "getParentDataContext": {
              "type": "function",
              "refID": 29
            },
            "getInclusionArguments": {
              "type": "function",
              "refID": 31
            },
            "args": {
              "type": "function",
              "refID": 33
            },
            "extend": {
              "type": "function",
              "refID": 35
            },
            "prototype": {
              "type": "object",
              "members": {
                "template": {
                  "type": "function",
                  "refID": 38
                },
                "defaultTemplate": {
                  "type": "function",
                  "refID": 40
                },
                "clear": {
                  "type": "function"
                },
                "data": {
                  "type": "function",
                  "refID": 44
                },
                "create": {
                  "type": "function",
                  "refID": 46
                },
                "destroy": {
                  "type": "function",
                  "refID": 48
                },
                "onViewCreated": {
                  "type": "function",
                  "refID": 50
                },
                "onViewReady": {
                  "type": "function",
                  "refID": 52
                },
                "onViewDestroyed": {
                  "type": "function",
                  "refID": 54
                },
                "insert": {
                  "type": "function",
                  "refID": 56
                },
                "getController": {
                  "type": "function",
                  "refID": 58
                },
                "setController": {
                  "type": "function",
                  "refID": 60
                },
                "hasController": {
                  "type": "function",
                  "refID": 62
                }
              }
            }
          }
        },
        "Layout": {
          "type": "function",
          "refID": 64,
          "members": {
            "DEFAULT_REGION": {
              "type": "constant",
              "value": "main"
            },
            "getParentDataContext": {
              "ref": 29
            },
            "getInclusionArguments": {
              "ref": 31
            },
            "args": {
              "ref": 33
            },
            "extend": {
              "ref": 35
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 64
                },
                "region": {
                  "type": "function"
                },
                "destroyRegions": {
                  "type": "function"
                },
                "render": {
                  "type": "function"
                },
                "has": {
                  "type": "function"
                },
                "regionKeys": {
                  "type": "function"
                },
                "clear": {
                  "type": "function"
                },
                "clearAll": {
                  "type": "function"
                },
                "beginRendering": {
                  "type": "function"
                },
                "onRegionCreated": {
                  "type": "function"
                },
                "onRegionRendered": {
                  "type": "function"
                },
                "onRegionDestroyed": {
                  "type": "function"
                },
                "template": {
                  "ref": 38
                },
                "defaultTemplate": {
                  "ref": 40
                },
                "data": {
                  "ref": 44
                },
                "create": {
                  "ref": 46
                },
                "destroy": {
                  "ref": 48
                },
                "onViewCreated": {
                  "ref": 50
                },
                "onViewReady": {
                  "ref": 52
                },
                "onViewDestroyed": {
                  "ref": 54
                },
                "insert": {
                  "ref": 56
                },
                "getController": {
                  "ref": 58
                },
                "setController": {
                  "ref": 60
                },
                "hasController": {
                  "ref": 62
                }
              }
            }
          }
        }
      }
    }
  },
  "iron:dynamic-template": {},
  "iron:layout": {},
  "iron:router": {
    "RouteController": {
      "type": "function",
      "refID": 0,
      "members": {
        "extend": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "action": {
              "type": "function"
            },
            "lookupProperty": {
              "type": "function"
            },
            "runHooks": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            }
          }
        }
      }
    },
    "Route": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "compile": {
              "type": "function"
            },
            "params": {
              "type": "function"
            },
            "normalizePath": {
              "type": "function"
            },
            "test": {
              "type": "function"
            },
            "exec": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "path": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "findController": {
              "type": "function"
            },
            "newController": {
              "type": "function"
            },
            "getController": {
              "type": "function"
            }
          }
        }
      }
    },
    "Router": {
      "type": "object",
      "members": {
        "options": {
          "type": "object"
        },
        "routes": {
          "type": "array"
        },
        "onRun": {
          "type": "function"
        },
        "onData": {
          "type": "function"
        },
        "onBeforeAction": {
          "type": "function"
        },
        "onAfterAction": {
          "type": "function"
        },
        "onStop": {
          "type": "function"
        },
        "waitOn": {
          "type": "function"
        },
        "load": {
          "type": "function"
        },
        "before": {
          "type": "function"
        },
        "after": {
          "type": "function"
        },
        "unload": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 23,
          "members": {
            "HOOK_TYPES": {
              "type": "array"
            },
            "LEGACY_HOOK_TYPES": {
              "type": "object",
              "members": {
                "load": {
                  "type": "constant",
                  "value": "onRun"
                },
                "before": {
                  "type": "constant",
                  "value": "onBeforeAction"
                },
                "after": {
                  "type": "constant",
                  "value": "onAfterAction"
                },
                "unload": {
                  "type": "constant",
                  "value": "onStop"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 23
                },
                "start": {
                  "type": "function",
                  "refID": 27
                },
                "onRequest": {
                  "type": "function",
                  "refID": 29
                },
                "run": {
                  "type": "function",
                  "refID": 31
                },
                "stop": {
                  "type": "function",
                  "refID": 33
                },
                "onUnhandled": {
                  "type": "function",
                  "refID": 35
                },
                "onRouteNotFound": {
                  "type": "function",
                  "refID": 37
                },
                "configure": {
                  "type": "function",
                  "refID": 39
                },
                "convertTemplateName": {
                  "type": "function",
                  "refID": 41
                },
                "convertRouteControllerName": {
                  "type": "function",
                  "refID": 43
                },
                "setNameConverter": {
                  "type": "function",
                  "refID": 45
                },
                "addHook": {
                  "type": "function",
                  "refID": 47
                },
                "getHooks": {
                  "type": "function",
                  "refID": 49
                },
                "map": {
                  "type": "function",
                  "refID": 51
                },
                "route": {
                  "type": "function",
                  "refID": 53
                },
                "path": {
                  "type": "function",
                  "refID": 55
                },
                "url": {
                  "type": "function",
                  "refID": 57
                },
                "match": {
                  "type": "function",
                  "refID": 59
                },
                "dispatch": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "start": {
          "ref": 27
        },
        "onRequest": {
          "ref": 29
        },
        "run": {
          "ref": 31
        },
        "stop": {
          "ref": 33
        },
        "onUnhandled": {
          "ref": 35
        },
        "onRouteNotFound": {
          "ref": 37
        },
        "configure": {
          "ref": 39
        },
        "convertTemplateName": {
          "ref": 41
        },
        "convertRouteControllerName": {
          "ref": 43
        },
        "setNameConverter": {
          "ref": 45
        },
        "addHook": {
          "ref": 47
        },
        "getHooks": {
          "ref": 49
        },
        "map": {
          "ref": 51
        },
        "route": {
          "ref": 53
        },
        "path": {
          "ref": 55
        },
        "url": {
          "ref": 57
        },
        "match": {
          "ref": 59
        },
        "dispatch": {
          "ref": 61
        }
      }
    },
    "Utils": {
      "type": "object",
      "members": {
        "assert": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "notifyDeprecated": {
          "type": "function"
        },
        "withDeprecatedNotice": {
          "type": "function"
        },
        "resolveValue": {
          "type": "function"
        },
        "hasOwnProperty": {
          "type": "function"
        },
        "inherits": {
          "type": "function"
        },
        "toArray": {
          "type": "function"
        },
        "typeOf": {
          "type": "function"
        },
        "extend": {
          "type": "function"
        },
        "create": {
          "type": "function"
        },
        "capitalize": {
          "type": "function"
        },
        "upperCamelCase": {
          "type": "function"
        },
        "camelCase": {
          "type": "function"
        },
        "pick": {
          "type": "function"
        },
        "StringConverters": {
          "type": "object",
          "members": {
            "none": {
              "type": "function"
            },
            "upperCamelCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            }
          }
        },
        "rewriteLegacyHooks": {
          "type": "function"
        }
      }
    },
    "IronRouter": {
      "type": "function",
      "refID": 0,
      "members": {
        "HOOK_TYPES": {
          "type": "array"
        },
        "LEGACY_HOOK_TYPES": {
          "type": "object",
          "members": {
            "load": {
              "type": "constant",
              "value": "onRun"
            },
            "before": {
              "type": "constant",
              "value": "onBeforeAction"
            },
            "after": {
              "type": "constant",
              "value": "onAfterAction"
            },
            "unload": {
              "type": "constant",
              "value": "onStop"
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "start": {
              "type": "function"
            },
            "onRequest": {
              "type": "function"
            },
            "run": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            },
            "onUnhandled": {
              "type": "function"
            },
            "onRouteNotFound": {
              "type": "function"
            },
            "configure": {
              "type": "function"
            },
            "convertTemplateName": {
              "type": "function"
            },
            "convertRouteControllerName": {
              "type": "function"
            },
            "setNameConverter": {
              "type": "function"
            },
            "addHook": {
              "type": "function"
            },
            "getHooks": {
              "type": "function"
            },
            "map": {
              "type": "function"
            },
            "route": {
              "type": "function"
            },
            "path": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "match": {
              "type": "function"
            },
            "dispatch": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "splendido:accounts-templates-core": {
    "AccountsTemplates": {
      "type": "object",
      "members": {
        "ROUTE_DEFAULT": {
          "type": "object",
          "members": {
            "changePwd": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "atChangePwd"
                },
                "path": {
                  "type": "constant",
                  "value": "/change-password"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "atEnrollAccount"
                },
                "path": {
                  "type": "constant",
                  "value": "/enroll-account"
                }
              }
            },
            "forgotPwd": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "atForgotPwd"
                },
                "path": {
                  "type": "constant",
                  "value": "/forgot-password"
                }
              }
            },
            "resetPwd": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "atResetPwd"
                },
                "path": {
                  "type": "constant",
                  "value": "/reset-password"
                }
              }
            },
            "signIn": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "atSignIn"
                },
                "path": {
                  "type": "constant",
                  "value": "/sign-in"
                }
              }
            },
            "signUp": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "atSignUp"
                },
                "path": {
                  "type": "constant",
                  "value": "/sign-up"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "atVerifyEmail"
                },
                "path": {
                  "type": "constant",
                  "value": "/verify-email"
                }
              }
            }
          }
        },
        "INPUT_TYPES": {
          "type": "array"
        },
        "options": {
          "type": "object",
          "members": {
            "privacyUrl": {
              "type": "undefined"
            },
            "termsUrl": {
              "type": "undefined"
            },
            "homeRoutePath": {
              "type": "constant",
              "value": "/"
            },
            "redirectTimeout": {
              "type": "constant",
              "value": 2000
            }
          }
        },
        "SPECIAL_FIELDS": {
          "type": "array"
        },
        "routes": {
          "type": "object"
        },
        "addField": {
          "type": "function"
        },
        "addFields": {
          "type": "function"
        },
        "configure": {
          "type": "function"
        },
        "configureRoute": {
          "type": "function"
        },
        "hasField": {
          "type": "function"
        },
        "getField": {
          "type": "function"
        },
        "getFields": {
          "type": "function"
        },
        "getFieldIds": {
          "type": "function"
        },
        "getRouteName": {
          "type": "function"
        },
        "getRoutePath": {
          "type": "function"
        },
        "oauthServices": {
          "type": "function"
        },
        "validateField": {
          "type": "function"
        },
        "removeField": {
          "type": "function"
        },
        "setupRoutes": {
          "type": "function"
        },
        "init": {
          "type": "function"
        }
      }
    }
  },
  "coffeescript": {},
  "softwarerero:accounts-t9n": {
    "T9n": {
      "type": "function",
      "members": {
        "maps": {
          "type": "object",
          "members": {
            "ar": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "اضف"
                },
                "and": {
                  "type": "constant",
                  "value": "و"
                },
                "back": {
                  "type": "constant",
                  "value": "رجوع"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "غير كلمة السر"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "اختر كلمة السر"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "بفتح حسابك انت توافق على"
                },
                "configure": {
                  "type": "constant",
                  "value": "تعديل"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "افتح حساب جديد"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "كلمة السر الحالية"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "ليس عندك حساب؟"
                },
                "email": {
                  "type": "constant",
                  "value": "البريد الالكترونى"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "البريد الالكترونى"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "اعادة تعيين البريد الالكترونى"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "نسيت كلمة السر؟"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "اذا كان عندك حساب"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "كلمة السر الجديدة"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "كلمة السر الجديدة مرة اخرى"
                },
                "optional": {
                  "type": "constant",
                  "value": "اختيارى"
                },
                "OR": {
                  "type": "constant",
                  "value": "او"
                },
                "password": {
                  "type": "constant",
                  "value": "كلمة السر"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "كلمة السر مرة اخرى"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "سياسة الخصوصية"
                },
                "remove": {
                  "type": "constant",
                  "value": "ازالة"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "اعادة تعيين كلمة السر"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "تعيين كلمة السر"
                },
                "sign": {
                  "type": "constant",
                  "value": "تسجيل"
                },
                "signIn": {
                  "type": "constant",
                  "value": "تسجيل الدخول"
                },
                "signin": {
                  "type": "constant",
                  "value": "تسجيل الدخول"
                },
                "signOut": {
                  "type": "constant",
                  "value": "تسجيل الخروج"
                },
                "signUp": {
                  "type": "constant",
                  "value": "افتح حساب جديد"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "رمز التسجيل"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "سجل ببريدك الالكترونى"
                },
                "terms": {
                  "type": "constant",
                  "value": "شروط الاستخدام"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "جدد كلمة السر"
                },
                "username": {
                  "type": "constant",
                  "value": "اسم المستخدم"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "اسم المستخدم او البريد الالكترونى"
                },
                "with": {
                  "type": "constant",
                  "value": "مع"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "تم ارسال البريد الالكترونى"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "تم تأكيد البريد الالكترونى"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "تم تغيير كلمة السر"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "تم اعادة تعيين كلمة السر"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "البريد الالكترونى مطلوب"
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "سبعة حروف هو الحد الادنى لكلمة السر"
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "كلمتين السر لا يتطابقان"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "كلمة السر يجب ان تحتوى على رقم واحد على الاقل"
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "كلمة السر تحتاج الى حرف اخر"
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "عليك بتسجبل الدخول لفعل ذلك"
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "رمز التسجيل غير صحيح"
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "رمز التسجيل مطلوب"
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "اسم المستخدم لا يمكن ان يكون بريد الكترونى"
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "اسم المستخدم مطلوب"
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "البريد الالكترونى مسجل"
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "البريد الالكترونى لا يتوافق مع الشروط"
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "رمز الدخول غير صالح"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "تسجيل الدخول غير مسموح"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "خدمة غير معروفة"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "اختيارات غير معلومة عند تسجيل الدخول"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "تأكيد المستخدم فشل"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "اسم المستخدم مسجل"
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "لم تسجل دخولك"
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "لقد تم تسجيل خروجك من قبل الخادم. قم بتسجيل الدخول مجددا."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "لقد انتهت جلستك. قم بتسجيل الدخول مجددا."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "لم نجد محاولة دخول مطابقة"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "كلمة السر قديمة. قم باعادة تعيين كلمة السر."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "كلمة السر غير صحيحة."
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "البريد الالكترونى غير صالح"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "يجب ان تسجل دخولك"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "يجب تعيين اسم مستخدم او بريد الكترونى"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "صيغة كلمة السر القديمة"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "كلمة السر لا يمكن ان تترك فارغة"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "فتح الحسابات غير مسموح"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "انتهى زمن الرمز"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "الرمز يحتوى على بريد الكترونى غير صالح"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "المستخدم لم يقم بتعيين كلمة سر"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "اسم المستخدم غير موجود"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "انتهى زمن رابط تأكيد البريد الالكترونى"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "رابط تأكيد البريد الالكترونى ينتمى الى بريد الكترونى غير معروف"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "المطابقة فشلت"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "خطأ غير معروف"
                }
              }
            },
            "zh-cn": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "添加"
                },
                "and": {
                  "type": "constant",
                  "value": "和"
                },
                "back": {
                  "type": "constant",
                  "value": "返回"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "修改密码"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "新密码"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "点击注册表示您同意"
                },
                "configure": {
                  "type": "constant",
                  "value": "配置"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "创建账户"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "当前密码"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "没有账户？"
                },
                "email": {
                  "type": "constant",
                  "value": "电子邮箱"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "电邮地址"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "邮件重置链接"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "忘记密码？"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "如果您已有账户"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "新密码"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "再输一遍新密码"
                },
                "optional": {
                  "type": "constant",
                  "value": "可选的"
                },
                "OR": {
                  "type": "constant",
                  "value": "或"
                },
                "password": {
                  "type": "constant",
                  "value": "密码"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "再输一遍密码"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "隐私条例"
                },
                "remove": {
                  "type": "constant",
                  "value": "移除"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "重置您的密码"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "设置密码"
                },
                "sign": {
                  "type": "constant",
                  "value": "登"
                },
                "signIn": {
                  "type": "constant",
                  "value": "登陆"
                },
                "signin": {
                  "type": "constant",
                  "value": "登陆"
                },
                "signOut": {
                  "type": "constant",
                  "value": "登出"
                },
                "signUp": {
                  "type": "constant",
                  "value": "注册"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "注册码"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "用您的电子邮件地址注册"
                },
                "terms": {
                  "type": "constant",
                  "value": "使用条例"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "更新您的密码"
                },
                "username": {
                  "type": "constant",
                  "value": "用户名"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "用户名或电子邮箱"
                },
                "with": {
                  "type": "constant",
                  "value": "与"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "邮件已发出"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "邮件验证成功"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "密码修改成功"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "密码重置成功"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "必须填写电子邮件"
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "密码至少7个字符长"
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "两次密码不一致"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "密码中至少有一位数字"
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "密码中至少有一位字母"
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "您必须登陆后才能查看"
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "注册码错误"
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "必须有注册码"
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "是用户名而不是电子邮件地址"
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "必须填写用户名。"
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "该电子邮件地址已被使用。"
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "错误的的电子邮件地址。"
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "登陆密匙错误"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "登陆被阻止"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "未知服务"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "登陆请求存在无法识别的选项"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "用户验证失败"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "用户名已被占用。"
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "您还没有登陆。"
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "您被服务器登出了。请重新登陆。"
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "会话过期，请重新登陆。"
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "未发现对应登陆请求"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "密码过于老了，请重置您的密码。"
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "错误的密码"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "不合法的电子邮件地址"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "必须先登陆"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "必须设置用户名或电子邮件地址"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "较老的密码格式"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "密码不应该为空"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "注册被禁止"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "密匙过期"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "密匙对应的电子邮箱地址不合法"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "用户没有密码"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "未找到该用户"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "激活验证邮件的链接已过期"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "验证邮件的链接去向未知地址"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "匹配失败"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "未知错误"
                }
              }
            },
            "cs": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "přidat"
                },
                "and": {
                  "type": "constant",
                  "value": "a"
                },
                "back": {
                  "type": "constant",
                  "value": "zpět"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Změnte heslo"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Zvolte heslo"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Stiskem tlačítka Registrovat souhlasíte s"
                },
                "configure": {
                  "type": "constant",
                  "value": "Nastavit"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Vytvořit účet"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Současné heslo"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Nemáte účet?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Emailová adresa"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Odkaz na reset emailu"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Zapomenuté heslo?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Pokud již máte účet"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nové heslo"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Nové heslo (zopakovat)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Volitelný"
                },
                "OR": {
                  "type": "constant",
                  "value": "nebo"
                },
                "password": {
                  "type": "constant",
                  "value": "Heslo"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Heslo (zopakovat)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Nastavení soukromí"
                },
                "remove": {
                  "type": "constant",
                  "value": "odstranit"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Resetovat heslo"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Nastavit heslo"
                },
                "sign": {
                  "type": "constant",
                  "value": "Přihlášení"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Přihlásit se"
                },
                "signin": {
                  "type": "constant",
                  "value": "přihlásit se"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Odhlásit se"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Registrovat"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Registrační kód"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Registrovat se emailovou adresou"
                },
                "terms": {
                  "type": "constant",
                  "value": "Podmínky použití"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Aktualizujte si své heslo"
                },
                "username": {
                  "type": "constant",
                  "value": "Uživatelské jméno"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Uživatelské jméno nebo email"
                },
                "with": {
                  "type": "constant",
                  "value": "s"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email odeslán"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email ověřen"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Heslo změněno"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Heslo resetováno"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Email je povinný."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "minimální délka hesla je 7 znaků."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Hesla nesouhlasí"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Heslo musí obsahovat alespoň jednu číslici."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Heslo musí obsahovat alespoň 1 slovo."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Musíte být příhlášeni."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Registrační kód je chybný."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Registrační kód je povinný."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Uživatelské jméno nemůže být emailová adresa."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Uživatelské jméno je povinné."
                },
                "accounts.A login handler should return a result or undefined": {
                  "type": "constant",
                  "value": "Přihlašovací rutina musí vracet výsledek nebo undefined"
                },
                "accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Email již existuje."
                },
                "accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Email nesplňuje požadavky."
                },
                "accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Neplatný přihlašovací token"
                },
                "accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Přihlášení je zakázáno"
                },
                "accounts.Service unknown": {
                  "type": "constant",
                  "value": "Neznámá služba"
                },
                "accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Nerozpoznaná volba přihlašovacího požadavku"
                },
                "accounts.User validation failed": {
                  "type": "constant",
                  "value": "Validace uživatele selhala"
                },
                "accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Uživatelské jméno již existuje."
                },
                "accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Nejste přihlášený."
                },
                "accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Byl jste odhlášen. Prosím přihlašte se znovu."
                },
                "accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Vaše připojení vypršelo. Prosím přihlašte se znovu."
                },
                "accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Nenalezen odpovídající způsob přihlášení"
                },
                "accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Heslo je staré. Prosíme nastavte si ho znovu."
                },
                "accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Chybné heslo"
                },
                "accounts.Invalid email": {
                  "type": "constant",
                  "value": "Neplatný email"
                },
                "accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Uživatel musí být přihlášen"
                },
                "accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Je třeba zadat uživatelské jméno nebo email"
                },
                "accounts.old password format": {
                  "type": "constant",
                  "value": "starý formát hesla"
                },
                "accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Heslo nemůže být prázdné"
                },
                "accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Registrace je zakázaná"
                },
                "accounts.Token expired": {
                  "type": "constant",
                  "value": "Token vypršel"
                },
                "accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Token má neplatnou emailovou adresu"
                },
                "accounts.User has no password set": {
                  "type": "constant",
                  "value": "Uživatel nemá nastavené heslo"
                },
                "accounts.User not found": {
                  "type": "constant",
                  "value": "Uživatel nenalezen"
                },
                "accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Odkaz pro ověření emailu vypršel"
                },
                "accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Odkaz pro ověření emailu má neznámou adresu"
                },
                "accounts.Match failed": {
                  "type": "constant",
                  "value": "Nesouhlasí"
                },
                "accounts.Unknown error": {
                  "type": "constant",
                  "value": "Neznámá chyba"
                }
              }
            },
            "da": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "tilføj"
                },
                "and": {
                  "type": "constant",
                  "value": "og"
                },
                "back": {
                  "type": "constant",
                  "value": "tilbage"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Skift kodeord"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Vælg kodeord"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Ved at klikke på tilmeld accepterer du vores"
                },
                "configure": {
                  "type": "constant",
                  "value": "Konfigurer"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Opret konto"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Nuværende kodeord"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Har du ikke en konto?"
                },
                "email": {
                  "type": "constant",
                  "value": "E-mail"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "E-mail adresse"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Nulstil E-mail Link"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Glemt kodeord?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Hvis jeg allerede har en konto"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nyt kodeord"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Nyt kodeord (igen)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Frivilligt"
                },
                "OR": {
                  "type": "constant",
                  "value": "eller"
                },
                "password": {
                  "type": "constant",
                  "value": "Kodeord"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Kodeord (igen)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Privatlivspolitik"
                },
                "remove": {
                  "type": "constant",
                  "value": "fjern"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Nulstil dit kodeord"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Sæt kodeord"
                },
                "sign": {
                  "type": "constant",
                  "value": "Log"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Log ind"
                },
                "signin": {
                  "type": "constant",
                  "value": "Log ind"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Log ud"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Tilmeld"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Tilmeldingskode"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Tilmeld med din e-mail adresse"
                },
                "terms": {
                  "type": "constant",
                  "value": "Betingelser for brug"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Skift dit kodeord"
                },
                "username": {
                  "type": "constant",
                  "value": "Brugernavn"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Brugernavn eller e-mail"
                },
                "with": {
                  "type": "constant",
                  "value": "med"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "E-mail sendt"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email verificeret"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Password ændret"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Password reset"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "E-mail er påkrævet."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Kodeordet skal være mindst 7 tegn."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "De to kodeord er ikke ens."
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Kodeord kræver mindste et tal."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Kodeord kræver mindst et bogstav."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Du skal være logget ind for at kunne gøre det."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Tilmeldingskode er forkert."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Tilmeldingskode er påkrævet."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Brugernavn kan ikke være en e-mail adresse."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Brugernavn skal udfyldes."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "E-mail findes allerede."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "E-mail modsvarer ikke kriteriet."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Invalid log ind token"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Log ind forbudt"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Service ukendt"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Ukendte options for login forsøg"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Bruger validering fejlede"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Brugernavn findes allerede."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Du er ikke logget ind."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Du er blevet logget af serveren. Log ind igen."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Din session er udløbet. Log ind igen."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Der fandtes ingen login forsøg"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Kodeordet er for gammelt. Du skal resette det."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Forkert kodeord"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Invalid e-mail"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Du skal være logget ind"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Du skal angive enten brugernavn eller e-mail"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "gammelt kodeord format"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Kodeord skal være udfyldt"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Tilmeldinger forbudt"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Token udløbet"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Token har en invalid e-mail adresse"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "Bruger har ikke angivet noget kodeord"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Bruger ej fundet"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Verify email link expired"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Verificer e-mail link for ukendt adresse"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Match fejlede"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Ukendt fejl"
                }
              }
            },
            "de": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "hinzufügen"
                },
                "and": {
                  "type": "constant",
                  "value": "und"
                },
                "back": {
                  "type": "constant",
                  "value": "zurück"
                },
                "changePasswort": {
                  "type": "constant",
                  "value": "Passwort ändern"
                },
                "choosePasswort": {
                  "type": "constant",
                  "value": "Passwort auswählen"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Durch die Registrierung akzeptieren Sie unsere"
                },
                "configure": {
                  "type": "constant",
                  "value": "Konfigurieren"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Konto erzeugen"
                },
                "currentPasswort": {
                  "type": "constant",
                  "value": "Aktuelles Passwort"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Noch kein Konto?"
                },
                "email": {
                  "type": "constant",
                  "value": "E-Mail"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "E-Mail Adresse"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Senden"
                },
                "forgotPasswort": {
                  "type": "constant",
                  "value": "Passwort vergessen?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Falls Sie ein Konto haben, bitte hier"
                },
                "newPasswort": {
                  "type": "constant",
                  "value": "Neues Passwort"
                },
                "newPasswortAgain": {
                  "type": "constant",
                  "value": "Neues Passwort (wiederholen)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Optional"
                },
                "OR": {
                  "type": "constant",
                  "value": "ODER"
                },
                "Passwort": {
                  "type": "constant",
                  "value": "Passwort"
                },
                "PasswortAgain": {
                  "type": "constant",
                  "value": "Passwort (wiederholen)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Datenschutzerklärung"
                },
                "remove": {
                  "type": "constant",
                  "value": "entfernen"
                },
                "resetYourPasswort": {
                  "type": "constant",
                  "value": "Passwort zurücksetzen"
                },
                "setPasswort": {
                  "type": "constant",
                  "value": "Passwort bestimmen"
                },
                "sign": {
                  "type": "constant",
                  "value": "Anmelden"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Anmelden"
                },
                "signin": {
                  "type": "constant",
                  "value": "anmelden"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Abmelden"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Registrieren"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Registrierungscode"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Mit E-Mail registrieren"
                },
                "terms": {
                  "type": "constant",
                  "value": "Geschäftsbedingungen"
                },
                "updateYourPasswort": {
                  "type": "constant",
                  "value": "Passwort aktualisieren"
                },
                "username": {
                  "type": "constant",
                  "value": "Benutzername"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Benutzername oder E-Mail"
                },
                "with": {
                  "type": "constant",
                  "value": "mit"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email gesendet"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email verifiziert"
                },
                "info.PasswortChanged": {
                  "type": "constant",
                  "value": "Passwort geändert"
                },
                "info.PasswortReset": {
                  "type": "constant",
                  "value": "Passwort zurückgesetzt"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "E-Mail benötigt."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Passwort muss mindesten 7 Zeichen lang sein."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Passwörter stimmen nicht überein."
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Passwort muss mindestens eine Ziffer enthalten."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Passwort muss mindestens einen Buchstaben enthalten."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Sie müssen sich anmelden."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Registrierungscode ungültig."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Registrierungscode benötigt."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Benutzername kann nicht eine E-Mail."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Benutzername benötigt."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Die Email gibt es schon."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Emails stimmt nicht mit den Kriterien überein."
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Die Benutzerdaten scheinen nicht korrekt"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Den Benutzer gibt es schon."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Sie sind nicht eingeloggt."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Der Server hat Dich ausgeloggt. Bitte melde Dich erneut an."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Deine Sitzung ist abgelaufen. Bitte melde Dich erneut an."
                },
                "error.accounts.Passwort is old. Please reset your Passwort.": {
                  "type": "constant",
                  "value": "Das Passwort ist abgelaufen, bitte zurücksetzen."
                },
                "error.accounts.Incorrect Passwort": {
                  "type": "constant",
                  "value": "Falschen Passwort"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Falschen Email"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Da muss man sich aber erst anmelden"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Benutzername oder Email sollte man schon angeben"
                },
                "error.accounts.Passwort may not be empty": {
                  "type": "constant",
                  "value": "Das Passwort darf nicht leer bleiben"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Anmeldungen sind verboten"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Das Token ist abgelaufen"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Für des Token stimmt die Email-Adresse nicht"
                },
                "error.accounts.User has no Passwort set": {
                  "type": "constant",
                  "value": "Kein Passwort für den Benutzer angegeben"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Benutzer nicht gefunden"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Token zur Verifizierung der Email ist abgelaufen"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Token zur Verifizierung der Email ist für eine unbekannte Adresse"
                }
              }
            },
            "en": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "add"
                },
                "and": {
                  "type": "constant",
                  "value": "and"
                },
                "back": {
                  "type": "constant",
                  "value": "back"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Change Password"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Choose a Password"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "By clicking Register, you agree to our"
                },
                "configure": {
                  "type": "constant",
                  "value": "Configure"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Create an Account"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Current Password"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Don't have an account?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Email Address"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Email Reset Link"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Forgot your password?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "If you already have an account"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "New Password"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "New Password (again)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Optional"
                },
                "OR": {
                  "type": "constant",
                  "value": "OR"
                },
                "password": {
                  "type": "constant",
                  "value": "Password"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Password (again)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Privacy Policy"
                },
                "remove": {
                  "type": "constant",
                  "value": "remove"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Reset your password"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Set Password"
                },
                "sign": {
                  "type": "constant",
                  "value": "Sign"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Sign In"
                },
                "signin": {
                  "type": "constant",
                  "value": "sign in"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Sign Out"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Register"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Registration Code"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Register with your email address"
                },
                "terms": {
                  "type": "constant",
                  "value": "Terms of Use"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Update your password"
                },
                "username": {
                  "type": "constant",
                  "value": "Username"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Username or email"
                },
                "with": {
                  "type": "constant",
                  "value": "with"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email sent"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email verified"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Password changed"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Password reset"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Email is required."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "7 character minimum password."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Passwords don't match"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Password must have at least one digit."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Password requires 1 letter."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "You must be signed in to do that."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Registration code is incorrect."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Registration code is required."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Username cannot be an email address."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Username is required."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Email already exists."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Email doesn't match the criteria."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Invalid login token"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Login forbidden"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Service unknown"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Unrecognized options for login request"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "User validation failed"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Username already exists."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "You are not logged in."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "You've been logged out by the server. Please log in again."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Your session has expired. Please log in again."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "No matching login attempt found"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Password is old. Please reset your password."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Incorrect password"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Invalid email"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Must be logged in"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Need to set a username or email"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "old password format"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Password may not be empty"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Signups forbidden"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Token expired"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Token has invalid email address"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "User has no password set"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "User not found"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Verify email link expired"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Verify email link is for unknown address"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Match failed"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Unknown error"
                }
              }
            },
            "es": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "agregar"
                },
                "and": {
                  "type": "constant",
                  "value": "y"
                },
                "back": {
                  "type": "constant",
                  "value": "atrás"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Cambiar Contraseña"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Eligir Contraseña"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Si haces clic en Sucribir estas de acuerdo con la"
                },
                "configure": {
                  "type": "constant",
                  "value": "Disposición"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Crear cuenta"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Contraseña actual"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "No tenés una cuenta?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Dirección de Email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Reiniciar Email"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Contraseña olvidada?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Si ya tenés una cuenta"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nueva Contraseña"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Nueva Contraseña (repetición)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Opcional"
                },
                "OR": {
                  "type": "constant",
                  "value": "O"
                },
                "password": {
                  "type": "constant",
                  "value": "Contraseña"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Contraseña (repetición)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Póliza de Privacidad"
                },
                "remove": {
                  "type": "constant",
                  "value": "remover"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Resetear tu contraseña"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Definir Contraseña"
                },
                "sign": {
                  "type": "constant",
                  "value": "Ingresar"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Entrar"
                },
                "signin": {
                  "type": "constant",
                  "value": "entrar"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Salir"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Suscribir"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Codigo para suscribir"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Suscribir con tu email"
                },
                "terms": {
                  "type": "constant",
                  "value": "Terminos de Uso"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Actualizar tu contraseña"
                },
                "username": {
                  "type": "constant",
                  "value": "Usuario"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Usuario o email"
                },
                "with": {
                  "type": "constant",
                  "value": "con"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email enviado"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email verificado"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Contraseña cambiado"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Resetar Contraseña"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Email es necesario."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "7 carácteres mínimo."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Contraseñas no coninciden"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "mínimo un dígito."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "mínimo una letra."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Debes iniciar sesión para hacer eso."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Código para suscribir no coincide."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Código para suscribir es necesario."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Usuario no puede ser Email."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Usuario es necesario."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Email ya existe."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Email no coincide con los criterios."
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "No se ha podido validar el usuario"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Usuario ya existe."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Has sido desconectado por el servidor. Por favor ingresa otra vez."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Tu session ha expirado. Por favor ingresa otra vez."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Contraseña no válida"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Hay que ingresar"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Tienes que especificar un usuario o un email"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Registro prohibido"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Token expirado"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Token contiene un Email inválido"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "Usuario no tiene contraseña"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Usuario no encontrado"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Enlace para verificar el Email ha expirado"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Enlace para verificar el Email contiene una dirección desconocida"
                }
              }
            },
            "es_ES": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "agregar"
                },
                "and": {
                  "type": "constant",
                  "value": "y"
                },
                "back": {
                  "type": "constant",
                  "value": "atrás"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Cambiar Contraseña"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Eligir Contraseña"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Si haces clic en Crear Cuenta estás de acuerdo con la"
                },
                "configure": {
                  "type": "constant",
                  "value": "Configurar"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Crear cuenta"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Contraseña actual"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "¿No estás registrado?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Dirección de email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Restaurar email"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "¿Has olvidado tu contraseña?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Ya tienes una cuenta, "
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nueva Contraseña"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Nueva Contraseña (repetición)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Opcional"
                },
                "OR": {
                  "type": "constant",
                  "value": "O"
                },
                "password": {
                  "type": "constant",
                  "value": "Contraseña"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Contraseña (repetición)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Póliza de Privacidad"
                },
                "remove": {
                  "type": "constant",
                  "value": "remover"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Recuperar tu contraseña"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Definir Contraseña"
                },
                "sign": {
                  "type": "constant",
                  "value": "Entrar"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Entrar"
                },
                "signin": {
                  "type": "constant",
                  "value": "entra"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Salir"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Regístrate"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Código para registrarte"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Regístrate con tu email"
                },
                "terms": {
                  "type": "constant",
                  "value": "Términos de Uso"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Actualizar tu contraseña"
                },
                "username": {
                  "type": "constant",
                  "value": "Usuario"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Usuario o email"
                },
                "with": {
                  "type": "constant",
                  "value": "con"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email enviado"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email verificado"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Contraseña cambiado"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Resetar Contraseña"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "El email es necesario."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "7 carácteres mínimo."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Contraseñas no coninciden"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "mínimo un dígito."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "mínimo una letra."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Debes iniciar sesión para esta opción."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Código de registro inválido."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Se requiere un código de registro."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "El usuario no puede ser una dirección de correo."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Se quiere nombre de usuario."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "El correo ya existe."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "El correo no coincide."
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "No hemos podido verificar el usuario"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Este usuario ya existe."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Has sido desconectado por el servidor. Por favor inicia sesión de nuevo."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Tu session ha expirado. Por favor inicia sesión de nuevo."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Contraseña inválida"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Debes iniciar sesión"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Debes especificar un usuario o email"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Los registros no están permitidos en este momento"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "El token ha expirado"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "EL token contiene un email inválido"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "El usuario no tiene contraseña"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Usuario no encontrado"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "El enlace para verificar el email ha expierado"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "El enlace para verificar el email está asociado a una dirección desconocida"
                }
              }
            },
            "fa": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "افزودن"
                },
                "and": {
                  "type": "constant",
                  "value": "و"
                },
                "back": {
                  "type": "constant",
                  "value": "برگشت"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "تعویض گذرواژه"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "انتخاب یک گذرواژه"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "با انتخاب ثبت‌نام، شما موافق هستید با"
                },
                "configure": {
                  "type": "constant",
                  "value": "پیکربندی"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "ایجاد یک حساب"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "گذرواژه کنونی"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "یک حساب ندارید؟"
                },
                "email": {
                  "type": "constant",
                  "value": "رایانامه"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "آدرس رایانامه"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "پیوند بازنشانی رایانامه"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "گذرواژه‌تان را فراموش کرده‌اید؟"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "اگر هم‌اکنون یک حساب دارید"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "گذرواژه جدید"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "گذرواژه جدید (تکرار)"
                },
                "optional": {
                  "type": "constant",
                  "value": "اختيارى"
                },
                "OR": {
                  "type": "constant",
                  "value": "یا"
                },
                "password": {
                  "type": "constant",
                  "value": "گذرواژه"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "گذرواژه (دوباره)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "حریم خصوصی"
                },
                "remove": {
                  "type": "constant",
                  "value": "حذف"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "بازنشانی گذرواژه شما"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "تنظیم گذرواژه"
                },
                "sign": {
                  "type": "constant",
                  "value": "نشان"
                },
                "signIn": {
                  "type": "constant",
                  "value": "ورود"
                },
                "signin": {
                  "type": "constant",
                  "value": "ورود"
                },
                "signOut": {
                  "type": "constant",
                  "value": "خروج"
                },
                "signUp": {
                  "type": "constant",
                  "value": "ثبت‌نام"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "کد ثبت‌نام"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "با آدرس رایانامه‌تان ثبت‌نام کنید"
                },
                "terms": {
                  "type": "constant",
                  "value": "قوانین استفاده"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "گذرواژه‌تان را به روز کنید"
                },
                "username": {
                  "type": "constant",
                  "value": "نام کاربری"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "نام کاربری یا رایانامه"
                },
                "with": {
                  "type": "constant",
                  "value": "با"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "رایانامه ارسال شد"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "رایانامه تایید شد"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "گذرواژه تغییر کرد"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "گذرواژه بازنشانی شد"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "رایانامه ضروری است."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "گذرواژه حداقل ۷ کاراکتر."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "گذرواژه‌ها تطابق ندارند"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "گذرواژه باید لااقل یک رقم داشته باشد."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "گذرواژه یک حرف نیاز دارد."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "برای انجام آن باید وارد شوید."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "کد ثبت‌نام نادرست است."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "کد ثبت‌نام ضروری است."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "نام کاربری نمی‌توان آدرس رایانامه باشد."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "نام کاربری ضروری است."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "رایانامه هم‌اکنون وجود دارد."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "رایانامه با ضوابط تطابق ندارد."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "علامت ورود نامعتبر است"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "ورود ممنوع است"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "سرویس ناشناس"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "گزینه‌های نامشخص برای درخواست ورود"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "اعتبارسنجی کاربر ناموفق"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "نام کاربری هم‌اکنون وجود دارد."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "شما وارد نشده‌اید."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "شما توسط سرور خارج شده‌اید. لطفأ دوباره وارد شوید."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "جلسه شما منقضی شده است. لطفا دوباره وارد شوید."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "تلاش ورود مطابق یافت نشد"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "گذرواژه قدیمی است. لطفأ گذرواژه‌تان را بازتنظیم کنید."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "گذرواژه نادرست"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "رایانامه نامعتبر"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "باید وارد شوید"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "یک نام کاربری یا ایمیل باید تنظیم شود"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "قالب گذرواژه قدیمی"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "گذرواژه نمی‌تواند خالی باشد"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "ثبت‌نام ممنوع"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "علامت رمز منقظی شده است"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "علامت رمز دارای آدرس رایانامه نامعتبر است"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "کاربر گذرواژه‌ای تنظیم نکرده است"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "کاربر یافت نشد"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "پیوند تایید رایانامه منقضی شده است"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "پیوند تایید رایانامه برای آدرس ناشناخته است"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "تطابق ناموفق"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "خطای ناشناخته"
                }
              }
            },
            "fr": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "Ajouter"
                },
                "and": {
                  "type": "constant",
                  "value": "et"
                },
                "back": {
                  "type": "constant",
                  "value": "retour"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Modifier le mot de passe"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Choisir le mot de passe"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "En cliquant sur S'enregistrer, vous acceptez notre"
                },
                "configure": {
                  "type": "constant",
                  "value": "Configurer"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Créer un compte"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Mot de passe actuel"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Vous n'avez pas de compte ?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Adresse Email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Envoyer le mail de réinitialisation"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Vous avez oublié votre mot de passe ?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Si vous avez déjà un compte"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nouveau mot de passe"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Confirmer le nouveau mot de passe"
                },
                "optional": {
                  "type": "constant",
                  "value": "Optionnel"
                },
                "OR": {
                  "type": "constant",
                  "value": "OU"
                },
                "password": {
                  "type": "constant",
                  "value": "Mot de passe"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Confirmer le mot de passe"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Politique de confidentialité"
                },
                "remove": {
                  "type": "constant",
                  "value": "Supprimer"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Reinitialiser votre mot de passe"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Spécifier le mot de passe"
                },
                "sign": {
                  "type": "constant",
                  "value": "S'enregistrer"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Se Connecter"
                },
                "signin": {
                  "type": "constant",
                  "value": "se connecter"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Se Deconnecter"
                },
                "signUp": {
                  "type": "constant",
                  "value": "S'enregistrer"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Code d'inscription"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "S'enregistrer avec votre adresse email"
                },
                "terms": {
                  "type": "constant",
                  "value": "Conditions d'utilisation"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Mettre à jour le mot de passe"
                },
                "username": {
                  "type": "constant",
                  "value": "Nom d'utilisateur"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Nom d'utilisateur ou email"
                },
                "with": {
                  "type": "constant",
                  "value": "avec"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email envoyé"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email verifié"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Mot de passe modifié"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Mot de passe réinitialisé"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Un email est requis."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Votre mot de passe doit contenir au minimum 7 caractères."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Les mots de passe ne correspondent pas"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Votre mot de passe doit contenir au moins un chiffre."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Votre mot de passe doit contenir au moins une lettre."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Vous devez être connecté pour continuer."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Le code d'enregistrement est incorrect."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Un code d'inscription est requis."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Le nom d'utilisateur ne peut être le même que l'adresse email."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Un nom d'utilisateur est requis."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Adresse email déjà utilisée."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Adresse email ne correspond pas aux critères."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Jeton d'authentification invalide"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Authentification interdite"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Service inconnu"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Options inconnues pour la requête d'authentification"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Echec de la validation de l'utilisateur"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Nom d'utilisateur déjà utilisé."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Vous n'êtes pas authentifié."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Vous avez été déconnecté par le serveur. Veuillez vous reconnecter."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Votre session a expiré. Veuillez vous reconnecter."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Aucune tentative d'authentification ne correspond"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Votre mot de passe est trop ancien. Veuillez le modifier."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Mot de passe incorrect"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Email invalide"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Vous devez être connecté"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Vous devez renseigner un nom d'utilisateur ou une adresse email"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "Ancien format de mot de passe"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Le mot de passe ne peut être vide"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "La création de compte est interdite"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Jeton expiré"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Le jeton contient une adresse email invalide"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "L'utilisateur n'a pas de mot de passe"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Utilisateur inconnu"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Lien de vérification d'email expiré"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Le lien de vérification d'email réfère à une adresse inconnue"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "La correspondance a échoué"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Erreur inconnue"
                }
              }
            },
            "he": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "הוסף"
                },
                "and": {
                  "type": "constant",
                  "value": "ו"
                },
                "back": {
                  "type": "constant",
                  "value": "חזרה"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "שינוי סיסמא"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "בחירת סיסמא"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "על ידי לחיצה על הירשם, הינך מסכים"
                },
                "configure": {
                  "type": "constant",
                  "value": "הגדרות"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "הוספת חשבון"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "סיסמא נוכחית"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "אין לך חשבון?"
                },
                "email": {
                  "type": "constant",
                  "value": "דוא\"ל"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "דוא\"ל"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "שלח קישור לאיפוס סיסמא"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "שכחת סיסמא?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "אם יש לך חשבון"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "סיסמא חדשה"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "סיסמא חדשה (שוב)"
                },
                "optional": {
                  "type": "constant",
                  "value": "רשות"
                },
                "OR": {
                  "type": "constant",
                  "value": "או"
                },
                "password": {
                  "type": "constant",
                  "value": "סיסמא"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "סיסמא (שוב)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "למדיניות הפרטיות"
                },
                "remove": {
                  "type": "constant",
                  "value": "הסרה"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "איפוס סיסמא"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "עדכון סיסמא"
                },
                "signIn": {
                  "type": "constant",
                  "value": "כניסה"
                },
                "signin": {
                  "type": "constant",
                  "value": "כניסה"
                },
                "signOut": {
                  "type": "constant",
                  "value": "יציאה"
                },
                "signUp": {
                  "type": "constant",
                  "value": "הרשמה לחשבון"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "קוד הרשמה"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "הירשם באמצעות הדוא\"ל"
                },
                "terms": {
                  "type": "constant",
                  "value": "לתנאי השימוש"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "עדכון סיסמא"
                },
                "username": {
                  "type": "constant",
                  "value": "שם משתמש"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "שם משמש או דוא\"ל"
                },
                "with": {
                  "type": "constant",
                  "value": "עם"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "נשלחה הודעה לדוא\"ל"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "כתובת הדוא\"ל וודאה בהצלחה"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "סיסמתך שונתה בהצלחה"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "סיסמתך אופסה בהצלחה"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "חובה להזין כתובת דוא\"ל"
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "חובה להזין סיסמא בעלת 7 תווים לפחות."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "הסיסמאות אינן זהות."
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "הסיסמא חייבת לכלול ספרה אחת לפחות."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "הסיסמא חייבת לכלול אות אחת לפחות."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "חובה להיכנס למערכת כדי לבצע פעולה זו."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "קוד ההרשמה שגוי."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "חובה להזין את קוד ההרשמה."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "של המשתמש לא יכול להיות כתובת דוא\"ל."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "חובה להזין שם משתמש."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "הדוא\"ל כבר רשום לחשבון."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "הדוא\"ל לא מקיים את הקריטריונים."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Token כניסה שגוי"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "הכניסה נאסרה"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Service לא ידוע"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "נסיון הכניסה כלל אופציות לא מזוהות"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "אימות המשתמש נכשל"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "שם המשתמש כבר קיים."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "לא נכנסת לחשבון."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "השרת הוציא אותך מהמערכת. נא להיכנס לחשבונך שוב."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "ה-session שלך פג תוקף. נא להיכנס לחשבונך שוב."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "לא נמצא נסיון כניסה מתאים"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "סיסמתך ישנה. נא להחליך אותה."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "סיסמא שגויה"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "דוא\"ל שגוי"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "חובה להיכנס למערכת כדי לבצע פעולה זו."
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "חובה להגדיר שם משתמש או דוא\"ל"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "פורמט סיסמא ישן"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "הסיסמא לא יכולה להיות ריקה"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "אסור להירשם"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "ה-token פג תוקף"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "ה-token מכיל כתובת דוא\"ל שגוייה"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "למשתמש אין סיסמא"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "המשתמש לא נמצא"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "קישור וידוי הדוא\"ל פג תוקף"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "קישור וידוי הדוא\"ל הוא לכתובת לא ידועה"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "ההתאמה נכשלה"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "שגיאה לא ידועה"
                }
              }
            },
            "it": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "aggiungi"
                },
                "and": {
                  "type": "constant",
                  "value": "e"
                },
                "back": {
                  "type": "constant",
                  "value": "indietro"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Cambia Password"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Scegli una Password"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Cliccando Registrati, accetti la nostra"
                },
                "configure": {
                  "type": "constant",
                  "value": "Configura"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Crea un Account"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Password Corrente"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Non hai un account?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Indirizzo Email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Invia Link di Reset"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Hai dimenticato la password?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Se hai già un account"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nuova Password"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Nuova Password (di nuovo)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Opzionale"
                },
                "OR": {
                  "type": "constant",
                  "value": "OPPURE"
                },
                "password": {
                  "type": "constant",
                  "value": "Password"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Password (di nuovo)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Privacy Policy"
                },
                "remove": {
                  "type": "constant",
                  "value": "rimuovi"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Reimposta la password"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Imposta Password"
                },
                "sign": {
                  "type": "constant",
                  "value": "Accedi"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Accedi"
                },
                "signin": {
                  "type": "constant",
                  "value": "accedi"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Esci"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Registrati"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Codice di Registrazione"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Registrati con il tuo indirizzo email"
                },
                "terms": {
                  "type": "constant",
                  "value": "Termini di Servizio"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Aggiorna la password"
                },
                "username": {
                  "type": "constant",
                  "value": "Username"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Nome utente o email"
                },
                "with": {
                  "type": "constant",
                  "value": "con"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email inviata"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email verificata"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Password cambiata"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Password reimpostata"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "L'Email è obbligatoria."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "La Password deve essere di almeno 7 caratteri."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Le Password non corrispondono"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "La Password deve contenere almeno un numero."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "La Password deve contenere 1 lettera."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Per fare questo devi accedere."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Codice di Registrazione errato."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Il Codice di Registrazione è obbligatorio."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Il Nome Utente non può essere un indirizzo email."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Il Nome utente è obbligatorio."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Indirizzo email già esistente."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "L'indirizzo email non soddisfa i requisiti."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Codice di accesso non valido"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Accesso non consentito"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Servizio sconosciuto"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Opzioni per la richiesta di accesso non ricunosciute"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Validazione utente fallita"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Nome utente già esistente."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Non hai effettuato l'accesso."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Sei stato disconnesso dal server. Per favore accedi di nuovo."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "La tua sessione è scaduta. Per favore accedi di nuovo."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Tentativo di accesso corrispondente non trovato"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "La password è vecchia. Per favore reimposta la tua password."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Password non corretta"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Email non valida"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Devi aver eseguito l'accesso"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "È necessario specificare un nome utente o un indirizzo email"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "vecchio formato password"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "La password non può essere vuota"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Registrazioni non consentite"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Codice scaduto"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Il codice ha un indirizzo email non valido"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "L'utente non ha una password impostata"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Utente non trovato"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Link per la verifica dell'email scaduto"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Il link per la verifica dell'email fa riferimento ad un indirizzo sconosciuto"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Riscontro fallito"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Errore Sconosciuto"
                }
              }
            },
            "pl": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "dodaj"
                },
                "and": {
                  "type": "constant",
                  "value": "i"
                },
                "back": {
                  "type": "constant",
                  "value": "powrót"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Zmień hasło"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Wybierz hasło"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Klikając na Zarejestruj się zgadzasz się z naszą"
                },
                "configure": {
                  "type": "constant",
                  "value": "Konfiguruj"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Utwórz konto"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Aktualne hasło"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Nie masz konta?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Adres email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Wyślij email z linkiem do zmiany hasła"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Zapomniałeś hasła?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Jeżeli już masz konto"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nowe hasło"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Nowe hasło (powtórz)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Nieobowiązkowe"
                },
                "OR": {
                  "type": "constant",
                  "value": "LUB"
                },
                "password": {
                  "type": "constant",
                  "value": "Hasło"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Hasło (powtórz)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "polityką prywatności"
                },
                "remove": {
                  "type": "constant",
                  "value": "usuń"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Ustaw nowe hasło"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Ustaw hasło"
                },
                "sign": {
                  "type": "constant",
                  "value": "Podpisz"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Zaloguj się"
                },
                "signin": {
                  "type": "constant",
                  "value": "zaloguj się"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Wyloguj się"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Zarejestruj się"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Kod rejestracji"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Zarejestruj się używając adresu email"
                },
                "terms": {
                  "type": "constant",
                  "value": "warunkami korzystania z serwisu"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Zaktualizuj swoje hasło"
                },
                "username": {
                  "type": "constant",
                  "value": "Nazwa użytkownika"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Nazwa użytkownika lub email"
                },
                "with": {
                  "type": "constant",
                  "value": "z"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Adres email wysłany"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Adres email zweryfikowany"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Hasło zmienione"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Hasło wyzerowane"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Wymagany jest adres email."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "7 znaków to minimalna długość hasła."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Hasła są różne"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Hasło musi zawierać przynajmniej jedną cyfrę."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Hasło musi zawierać 1 literę."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Musisz być zalogowany, aby to zrobić."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Kod rejestracji jest nieprawidłowy."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Wymagany jest kod rejestracji."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Adres email nie może być nazwą użytkownika."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Wymagana jest nazwa użytkownika."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Adres email już istnieje."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Adres email nie spełnia kryteriów."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Błędny token logowania"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Logowanie zabronione"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Nieznana usługa"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Nieznane parametry w żądaniu logowania."
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Niepoprawna nazwa użytkownika"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Nazwa użytkownika już istnieje."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Nie jesteś zalogowany."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Zostałeś wylogowane przez serwer. Zaloguj się ponownie."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Twoja sesja wygasła. Zaloguj się ponownie."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Nie dopasowano danych logowania."
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Hasło jest stare. Proszę wyzerować hasło."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Niepoprawne hasło"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Błędny adres email"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Musisz być zalogowany"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Wymagane ustawienie nazwy użytkownika lub adresu email"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "stary format hasła"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Hasło nie może być puste"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Rejestracja zabroniona"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Token wygasł"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Token ma niewłaściwy adres email"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "Użytkownik nie ma ustawionego hasła"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Nie znaleziono użytkownika"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Link weryfikacyjny wygasł"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Link weryfikacyjny jest dla nieznanego adresu"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Błędne dopasowanie"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Nieznany błąd"
                }
              }
            },
            "pt": {
              "type": "object",
              "members": {
                "and": {
                  "type": "constant",
                  "value": "e"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Ao clicar em Entrar, você aceita nosso"
                },
                "configure": {
                  "type": "constant",
                  "value": "Configurar"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Criar Conta"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Não tem conta?"
                },
                "email": {
                  "type": "constant",
                  "value": "E-mail"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Endereço de e-mail"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Gerar nova senha"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Esqueceu sua senha?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Se você já tem uma conta"
                },
                "optional": {
                  "type": "constant",
                  "value": "Opcional"
                },
                "OR": {
                  "type": "constant",
                  "value": "OU"
                },
                "password": {
                  "type": "constant",
                  "value": "Senha"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Política de Privacidade"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Gerar nova senha"
                },
                "sign": {
                  "type": "constant",
                  "value": "Entrar"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Entrar"
                },
                "signin": {
                  "type": "constant",
                  "value": "entrar"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Sair"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Registrar"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Código de acesso"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Entre usando seu endereço de e-mail"
                },
                "terms": {
                  "type": "constant",
                  "value": "Termos de Uso"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Atualizar senha"
                },
                "username": {
                  "type": "constant",
                  "value": "Nome de usuário"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Usuario ou e-mail"
                },
                "with": {
                  "type": "constant",
                  "value": "com"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "E-mail é obrigatório."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Senha requer um mínimo de 7 caracteres."
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Senha deve conter pelo menos um digito."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Senha deve conter pelo menos uma letra."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Você precisa estar logado para fazer isso."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Código de acesso incorreto."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "É necessário um código de acesso."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Nome de usuário não pode ser um endereço de e-mail."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Nome de usuário é obrigatório."
                }
              }
            },
            "ru": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "добавить"
                },
                "and": {
                  "type": "constant",
                  "value": "и"
                },
                "back": {
                  "type": "constant",
                  "value": "назад"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Сменить пароль"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Придумайте пароль"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Нажав на Регистрация вы соглашаетесь с условиями"
                },
                "configure": {
                  "type": "constant",
                  "value": "Конфигурировать"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Создать аккаунт"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Текущий пароль"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Нет аккаунта?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Отправить ссылку для сброса"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Забыли пароль?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Если у вас уже есть аккаунт"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Новый пароль"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Новый пароль (еще раз)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Необязательно"
                },
                "OR": {
                  "type": "constant",
                  "value": "ИЛИ"
                },
                "password": {
                  "type": "constant",
                  "value": "Пароль"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Пароль (еще раз)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Политики безопасности"
                },
                "remove": {
                  "type": "constant",
                  "value": "Удалить"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Сбросить пароль"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Установить пароль"
                },
                "sign": {
                  "type": "constant",
                  "value": "Подпись"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Войти"
                },
                "signin": {
                  "type": "constant",
                  "value": "bойти"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Выйти"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Регистрация"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Регистрационный код"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Зарегистрируйтесь с вашим email адресом"
                },
                "terms": {
                  "type": "constant",
                  "value": "Условиями пользования"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Обновить пароль"
                },
                "username": {
                  "type": "constant",
                  "value": "Имя пользователя"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Имя пользователя или email"
                },
                "with": {
                  "type": "constant",
                  "value": "с"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email отправлен"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email прошел проверку"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Пароль изменен"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Пароль сброшен"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Email обязательно."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Минимальное кол-во символов для пароля 7."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Пароли не совпадают"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "В пароле должна быть хотя бы одна цифра."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "В пароле должна быть хотя бы одна буква."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Необходимо войти для чтобы продолжить."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Неправильный регистрационный код."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Необходим регистрациооный код."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Имя пользователя не может быть адресом email."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Имя пользователя обязательно."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Email уже существует"
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Email не соответствует критериям."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Неверный токен для входа"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Вход запрещен"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Cервис неизвестен"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Неизвестные параметры для запроса входа"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Проверка пользователя неудалась"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Пользователь существует."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Вы не вошли."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Сервер инициировал выход. Пожалуйста войдите еще раз."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Ваша сессия устарела. Пожалуйста войдите еще раз."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Не было найдено соответствующей попытки войти"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Пароль устарел. Пожалуйста сбросьте Ваш пароль."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Неправильный пароль"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Несуществующий Email"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Необходимо войти"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Необходимо имя пользователя или email"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "старый формат пароля"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Пароль не может быть пустым"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Регистрация отключена"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Время действия токена истекло"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "У токена неправильный email адрес"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "У пользователя не установлен пароль"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Пользователь не найден"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Ссылка подтверждения email устарела"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Ссылка подтверждения email для неизвестного адреса"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Не совпадают"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Неизвестная ошибка"
                }
              }
            },
            "sl": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "dodaj"
                },
                "and": {
                  "type": "constant",
                  "value": "in"
                },
                "back": {
                  "type": "constant",
                  "value": "nazaj"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Spremeni geslo"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Izberi geslo"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "S klikom na Registracija se strinjaš"
                },
                "configure": {
                  "type": "constant",
                  "value": "Nastavi"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Nova registracija"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Trenutno geslo"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Nisi registriran(a)?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Email naslov"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Pošlji ponastavitveno povezavo"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Pozabljeno geslo?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Če si že registriran(a),"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Novo geslo"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Novo geslo (ponovno)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Po želji"
                },
                "OR": {
                  "type": "constant",
                  "value": "ALI"
                },
                "password": {
                  "type": "constant",
                  "value": "Geslo"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Geslo (ponovno)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "z našimi pogoji uporabe"
                },
                "remove": {
                  "type": "constant",
                  "value": "briši"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Ponastavi geslo"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Nastavi geslo"
                },
                "sign": {
                  "type": "constant",
                  "value": "Prijava"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Prijava"
                },
                "signin": {
                  "type": "constant",
                  "value": "se prijavi"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Odjava"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Registracija"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Prijavna koda"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Prijava z email naslovom"
                },
                "terms": {
                  "type": "constant",
                  "value": "Pogoji uporabe"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Spremeni geslo"
                },
                "username": {
                  "type": "constant",
                  "value": "Uporabniško ime"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Uporabniško ime ali email"
                },
                "with": {
                  "type": "constant",
                  "value": "z"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "E-pošta poslana"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email naslov preverjen"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Geslo spremenjeno"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Geslo ponastavljeno"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Email je obvezen vnos."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Geslo mora imeti vsaj sedem znakov."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Gesli se ne ujemata"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "V geslu mora biti vsaj ena številka."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "V geslu mora biti vsaj ena črka."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Za to moraš biti prijavljen(a)."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Prijavna koda je napačna."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Prijavna koda je obvezen vnos."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Uporabniško ime ne more biti email naslov."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Uporabniško ime je obvezen vnos."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Email že obstaja."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Email ne odgovarja kriterijem."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Napačen prijavni žeton"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Prijava ni dovoljena"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Neznana storitev"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Neznane možnosti v prijavnem zahtevku"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Preverjanje uporabnika neuspešno"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Uporabniško ime že obstaja"
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Nisi prijavljen(a)."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Odjavljen(a) si s strežnika. Ponovi prijavo."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Seja je potekla. Ponovi prijavo."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Prijava ne obstaja"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Geslo je staro. Zamenjaj ga."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Napačno geslo"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Napačen email"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Moraš biti prijavljane(a)"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Prijava ali email sta obvezna"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "stara oblika gesla"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Geslo ne sme biti prazno"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Prijave onemogočene"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Žeton je potekel"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Žeton vsebuje napačen email"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "Uporabnik nima gesla"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Uporabnik ne obstaja"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Povezava za potrditev je potekla"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Povezava za potrditev vsebuje neznan naslov"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Prijava neuspešna"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Neznana napaka"
                }
              }
            },
            "sv": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "lägg till"
                },
                "and": {
                  "type": "constant",
                  "value": "och"
                },
                "back": {
                  "type": "constant",
                  "value": "tillbaka"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Ändra lösenord"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Välj lösenord"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "När du väljer att skapa ett konto så godkänner du också vår"
                },
                "configure": {
                  "type": "constant",
                  "value": "Konfigurera"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Skapa ett konto"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Nuvarande lösenord"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Har du inget konto?"
                },
                "email": {
                  "type": "constant",
                  "value": "E-postadress"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "E-postadress"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "E-post återställningslänk"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Glömt din e-postadress?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Om du redan har ett konto"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nytt lösenord"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Nytt lösenord (upprepa)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Valfri"
                },
                "OR": {
                  "type": "constant",
                  "value": "ELLER"
                },
                "password": {
                  "type": "constant",
                  "value": "Lösenord"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Lösenord (upprepa)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "integritetspolicy"
                },
                "remove": {
                  "type": "constant",
                  "value": "ta bort"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Återställ ditt lösenord"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Sätt ett lösenord"
                },
                "sign": {
                  "type": "constant",
                  "value": "Logga"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Logga in"
                },
                "signin": {
                  "type": "constant",
                  "value": "logga in"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Logga ut"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Skapa konto"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Registreringskod"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Skapa ett konto med din e-postadress"
                },
                "terms": {
                  "type": "constant",
                  "value": "användarvilkor"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Uppdatera ditt lösenord"
                },
                "username": {
                  "type": "constant",
                  "value": "Användarnamn"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Användarnamn eller e-postadress"
                },
                "with": {
                  "type": "constant",
                  "value": "med"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "E-post skickades"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "E-post verifierades"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Lösenordet har ändrats"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Återställ lösenordet"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Det krävs ett lösenord."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Det krävs minst 7 tecken i ditt lösenord."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Lösenorden matchar inte."
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Lösenordet måste ha minst 1 siffra."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Lösenordet måste ha minst 1 bokstav."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Inloggning krävs här."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Registreringskoden är felaktig."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Det krävs en registreringskod."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Användarnamnet kan inte vara en e-postadress."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Det krävs ett användarnamn."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "E-postadressen finns redan."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "E-postadressen uppfyller inte kriterierna."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Felaktig login-token"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Inloggning tillåts ej"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Okänd service"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Okända val för inloggningsförsöket"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Validering av användare misslyckades"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Användarnamn finns redan."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Du är inte inloggad."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Du har loggats ut av servern. Vänligen logga in igen."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Din session har gått ut. Vänligen ligga in igen."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Inget matchande loginförsök kunde hittas"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Ditt lösenord är gammalt. Vänligen återställ ditt lösenord."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Felaktigt lösenord"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Ogiltig e-postadress"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Måste vara inloggad"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Ett användarnamn eller en e-postadress krävs."
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "gammalt lösenordsformat"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Lösenordet får inte vara tomt"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Registrering förbjuden"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Token har gått ut"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Token har ogiltig e-postadress"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "Användaren har inget lösenord"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Användaren hittades inte"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Länken för att verifera e-postadress har gått ut"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Länken för att verifiera e-postadress är för en okänd adress."
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Matchning misslyckades"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Okänt fel"
                }
              }
            },
            "uk": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "додати"
                },
                "and": {
                  "type": "constant",
                  "value": "та"
                },
                "back": {
                  "type": "constant",
                  "value": "назад"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Змінити пароль"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Придумайте пароль"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Натиснувши на Реєстрація ви погоджуєтеся з умовами"
                },
                "configure": {
                  "type": "constant",
                  "value": "Налаштувати"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Створити аккаунт"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Діючий пароль"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Немає аккаунта?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Отримати посилання для оновлення паролю"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Забули пароль?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Якщо у вас вже є аккаунт:"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Новий пароль"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Новий пароль (ще раз)"
                },
                "optional": {
                  "type": "constant",
                  "value": "Необов’язково"
                },
                "OR": {
                  "type": "constant",
                  "value": "АБО"
                },
                "password": {
                  "type": "constant",
                  "value": "Пароль"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Пароль (ще раз)"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Політики безпеки"
                },
                "remove": {
                  "type": "constant",
                  "value": "Видалити"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Відновити пароль"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Встановити пароль"
                },
                "sign": {
                  "type": "constant",
                  "value": "Підпис"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Увійти"
                },
                "signin": {
                  "type": "constant",
                  "value": "увійти"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Вийти"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Зареєструватися"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Реєстраційний код"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Зареєструйтесь з вашою email адресою"
                },
                "terms": {
                  "type": "constant",
                  "value": "Умовами користування"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Оновити пароль"
                },
                "username": {
                  "type": "constant",
                  "value": "Ім’я користувача"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Ім’я користувача або email"
                },
                "with": {
                  "type": "constant",
                  "value": "з"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email відправлено"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "Email пройшов перевірку"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Пароль змінено"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Пароль скинуто"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Email є обов’язковим."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Мінімальна кіл-ть символів для паролю 7."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Паролі не співпадають"
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Пароль повинен містити хоча б одну цифру."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Пароль повинен містити хоча б одну букву."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Для продовження необхідно увійти."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Невірний реєстраційний код."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Необхідний реєстраційний код."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Ім’я користувача не може бути email адресою."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Ім’я користувача є обов’язковим."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Email вже існує"
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Email відповідає критеріям."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Невірний токен для входу"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Вхід заборонено"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Невідомий сервіс"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Невідомі параметри для запиту входу"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Перевірка користувача не вдалася"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Користувач існує."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Ви не ввійшли."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Сервер ініціював вихід. Будь ласка увійдіть ще раз."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Ваша сесія застаріла. Будь ласка увійдіть ще раз."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Не було знайдено відповідної спроби увійти"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Пароль застарів. Будь ласка, скиньте Ваш пароль."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Невірний пароль"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Неіснуючий Email"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Необхідно увійти"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Необхідно ім’я користувача або email"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "старий формат паролю"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Пароль не може бути пустим"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Реєстрацію відключено"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Час дії токена вичерпано"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Невірна email адреса для токена"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "У користувача не встановлено пароль"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Користувач не знайдений"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Посилання підтвердження email застаріло"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Посилання підтвердження email для невідомої адреси"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Не співпадають"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Невідома помилка"
                }
              }
            },
            "vi": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "thêm"
                },
                "and": {
                  "type": "constant",
                  "value": "và"
                },
                "back": {
                  "type": "constant",
                  "value": "trở lại"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Bằng cách nhấn vào Đăng ký, bạn đã đồng ý với"
                },
                "configure": {
                  "type": "constant",
                  "value": "Cấu hình"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Tạo Tài khoản"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Chưa có tài khoản?"
                },
                "email": {
                  "type": "constant",
                  "value": "Email"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "Địa chỉ Email"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Gửi"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Quên mật khẩu?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Nếu bạn đã có tài khoản"
                },
                "optional": {
                  "type": "constant",
                  "value": "Tùy chọn"
                },
                "OR": {
                  "type": "constant",
                  "value": "Hoặc"
                },
                "password": {
                  "type": "constant",
                  "value": "Mật khẩu"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Chính sách bảo mật"
                },
                "remove": {
                  "type": "constant",
                  "value": "xóa"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Lấy lại mật khẩu"
                },
                "sign": {
                  "type": "constant",
                  "value": "Ký"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Đăng nhập"
                },
                "signin": {
                  "type": "constant",
                  "value": "đăng nhập"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Đăng xuất"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Đăng ký"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Mã đăng ký"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Đăng ký với email của bạn"
                },
                "terms": {
                  "type": "constant",
                  "value": "Điều khoản sử dụng"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Cập nhật mật khẩu"
                },
                "username": {
                  "type": "constant",
                  "value": "Tên đăng nhập"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Tên đăng nhập hoặc email"
                },
                "with": {
                  "type": "constant",
                  "value": "với"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "Email đã được gửi đi!"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "Email phải có."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Mật khẩu phải có ít nhất 7 ký tự."
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Mật khẩu phải có ít nhất 1 chữ số."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Mật khẩu phải có 1 ký tự chữ."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Phải đăng nhập."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Mã số đăng ký sai."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Phải có mã số đăng ký."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Tên đăng nhập không thể là địa chỉ email."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Phải có tên đăng nhập."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "Email đã tồn tại."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "Email không phù hợp."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Mã đăng nhập không đúng"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Đăng nhập bị cấm"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Chưa biết Dịch vụ"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Tùy chọn không được công nhận đối với yêu cầu đăng nhập"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Xác nhận người dùng thất bại"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Tên đăng nhập đã tồn tại."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Bạn chưa đăng nhập."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Bạn đã bị đăng xuất bởi máy chủ. Vui lòng đăng nhập lại."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Thời gian đăng nhập đã hết. Vui lòng đăng nhập lại."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Không tìm thấy đăng nhập phù hợp"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Mật khẩu đã cũ. Vui lòng lấy lại mật khẩu."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Mật khẩu sai"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Email sai"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Phải đăng nhập"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Phải điền tên đăng nhập hoặc email"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "định dạng mật khẩu cũ"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Đăng ký đã bị cấm"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Hết phiên đăng nhập"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Phiên đăng nhập chứa địa chỉ email sai"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "Người dùng chưa có mật khẩu"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Không tìm thấy người dùng"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Đường dẫn xác nhận email đã hết hạn"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Đường dẫn xác nhận email là cho địa chỉ chưa xác định"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Không đúng"
                }
              }
            },
            "no_NB": {
              "type": "object",
              "members": {
                "add": {
                  "type": "constant",
                  "value": "legg til"
                },
                "and": {
                  "type": "constant",
                  "value": "og"
                },
                "back": {
                  "type": "constant",
                  "value": "tilbake"
                },
                "changePassword": {
                  "type": "constant",
                  "value": "Bytt passord"
                },
                "choosePassword": {
                  "type": "constant",
                  "value": "Velg passord"
                },
                "clickAgree": {
                  "type": "constant",
                  "value": "Ved å klikke meld på godtar du vår"
                },
                "configure": {
                  "type": "constant",
                  "value": "Konfigurer"
                },
                "createAccount": {
                  "type": "constant",
                  "value": "Oprett konto"
                },
                "currentPassword": {
                  "type": "constant",
                  "value": "Nåværende passord"
                },
                "dontHaveAnAccount": {
                  "type": "constant",
                  "value": "Har du ikke en konto?"
                },
                "email": {
                  "type": "constant",
                  "value": "E-post"
                },
                "emailAddress": {
                  "type": "constant",
                  "value": "E-postadresse"
                },
                "emailResetLink": {
                  "type": "constant",
                  "value": "Epost nullstillingslenke"
                },
                "forgotPassword": {
                  "type": "constant",
                  "value": "Glemt passord?"
                },
                "ifYouAlreadyHaveAnAccount": {
                  "type": "constant",
                  "value": "Hvis du allerede har en konto"
                },
                "newPassword": {
                  "type": "constant",
                  "value": "Nytt passord"
                },
                "newPasswordAgain": {
                  "type": "constant",
                  "value": "Gjengi nytt passord"
                },
                "optional": {
                  "type": "constant",
                  "value": "Frivillig"
                },
                "OR": {
                  "type": "constant",
                  "value": "eller"
                },
                "password": {
                  "type": "constant",
                  "value": "Passord"
                },
                "passwordAgain": {
                  "type": "constant",
                  "value": "Gjengi passord"
                },
                "privacyPolicy": {
                  "type": "constant",
                  "value": "Personvern"
                },
                "remove": {
                  "type": "constant",
                  "value": "fjern"
                },
                "resetYourPassword": {
                  "type": "constant",
                  "value": "Nullstill passord"
                },
                "setPassword": {
                  "type": "constant",
                  "value": "Sett passord"
                },
                "sign": {
                  "type": "constant",
                  "value": "Logg"
                },
                "signIn": {
                  "type": "constant",
                  "value": "Logg inn"
                },
                "signin": {
                  "type": "constant",
                  "value": "Logg inn"
                },
                "signOut": {
                  "type": "constant",
                  "value": "Logg ut"
                },
                "signUp": {
                  "type": "constant",
                  "value": "Meld på"
                },
                "signupCode": {
                  "type": "constant",
                  "value": "Påmeldingskode"
                },
                "signUpWithYourEmailAddress": {
                  "type": "constant",
                  "value": "Meld på med din e-postadresse"
                },
                "terms": {
                  "type": "constant",
                  "value": "Betingelser for bruk"
                },
                "updateYourPassword": {
                  "type": "constant",
                  "value": "Oppdater passord"
                },
                "username": {
                  "type": "constant",
                  "value": "Brukernavn"
                },
                "usernameOrEmail": {
                  "type": "constant",
                  "value": "Brukernavn eller e-epost"
                },
                "with": {
                  "type": "constant",
                  "value": "med"
                },
                "info.emailSent": {
                  "type": "constant",
                  "value": "E-post sendt"
                },
                "info.emailVerified": {
                  "type": "constant",
                  "value": "E-post bekreftet"
                },
                "info.passwordChanged": {
                  "type": "constant",
                  "value": "Passord endret"
                },
                "info.passwordReset": {
                  "type": "constant",
                  "value": "Passord nullstillt"
                },
                "error.emailRequired": {
                  "type": "constant",
                  "value": "E-post obligatorisk."
                },
                "error.minChar": {
                  "type": "constant",
                  "value": "Passordet må ha minst 7 tegn."
                },
                "error.pwdsDontMatch": {
                  "type": "constant",
                  "value": "Passordene er ikke like."
                },
                "error.pwOneDigit": {
                  "type": "constant",
                  "value": "Passordet må ha minst ett tall."
                },
                "error.pwOneLetter": {
                  "type": "constant",
                  "value": "Passordet må ha minst en bokstav."
                },
                "error.signInRequired": {
                  "type": "constant",
                  "value": "Du må være logget inn for å gjøre dette."
                },
                "error.signupCodeIncorrect": {
                  "type": "constant",
                  "value": "Påmelding gikk galt."
                },
                "error.signupCodeRequired": {
                  "type": "constant",
                  "value": "Påmeldingskode kreves."
                },
                "error.usernameIsEmail": {
                  "type": "constant",
                  "value": "Brukernavn kan ikke være en e-postadresse."
                },
                "error.usernameRequired": {
                  "type": "constant",
                  "value": "Brukernavn må utfylles."
                },
                "error.accounts.Email already exists.": {
                  "type": "constant",
                  "value": "E-postadressen finnes allerede."
                },
                "error.accounts.Email doesn't match the criteria.": {
                  "type": "constant",
                  "value": "E-postadressen møter ikke kriteriet."
                },
                "error.accounts.Invalid login token": {
                  "type": "constant",
                  "value": "Ugyldig innloggingstegn"
                },
                "error.accounts.Login forbidden": {
                  "type": "constant",
                  "value": "Innlogging forbudt"
                },
                "error.accounts.Service unknown": {
                  "type": "constant",
                  "value": "Ukjent tjeneste"
                },
                "error.accounts.Unrecognized options for login request": {
                  "type": "constant",
                  "value": "Ukjendte valg ved innloggingsforsøk"
                },
                "error.accounts.User validation failed": {
                  "type": "constant",
                  "value": "Brukergodkjenning gikk galt"
                },
                "error.accounts.Username already exists.": {
                  "type": "constant",
                  "value": "Brukernavnet finnes allerede."
                },
                "error.accounts.You are not logged in.": {
                  "type": "constant",
                  "value": "Du er ikke logget inn."
                },
                "error.accounts.You've been logged out by the server. Please log in again.": {
                  "type": "constant",
                  "value": "Tjeneren loggt deg ut. Logg inn på ny."
                },
                "error.accounts.Your session has expired. Please log in again.": {
                  "type": "constant",
                  "value": "Din økt er utløpt. Logg inn på ny."
                },
                "error.accounts.No matching login attempt found": {
                  "type": "constant",
                  "value": "Fant ingen samsvarende innloggingsførsøk"
                },
                "error.accounts.Password is old. Please reset your password.": {
                  "type": "constant",
                  "value": "Passordet er for gammelt. Nullstill passordet ditt."
                },
                "error.accounts.Incorrect password": {
                  "type": "constant",
                  "value": "Feil passord"
                },
                "error.accounts.Invalid email": {
                  "type": "constant",
                  "value": "Ugyldig e-postadresse"
                },
                "error.accounts.Must be logged in": {
                  "type": "constant",
                  "value": "Du må være innlogget"
                },
                "error.accounts.Need to set a username or email": {
                  "type": "constant",
                  "value": "Oppgi brukernavn eller e-postadresse"
                },
                "error.accounts.old password format": {
                  "type": "constant",
                  "value": "gammelt passordformat"
                },
                "error.accounts.Password may not be empty": {
                  "type": "constant",
                  "value": "Passord må være utfyllt"
                },
                "error.accounts.Signups forbidden": {
                  "type": "constant",
                  "value": "Påmeldinger ikke tillatt"
                },
                "error.accounts.Token expired": {
                  "type": "constant",
                  "value": "Økten er utløpt"
                },
                "error.accounts.Token has invalid email address": {
                  "type": "constant",
                  "value": "Innloggingstegnet har ugyldig e-postadresse"
                },
                "error.accounts.User has no password set": {
                  "type": "constant",
                  "value": "Brukeren har ikke angitt passord"
                },
                "error.accounts.User not found": {
                  "type": "constant",
                  "value": "Bruker ikke funnet"
                },
                "error.accounts.Verify email link expired": {
                  "type": "constant",
                  "value": "Lenke for e-postbekreftelse er utløpt"
                },
                "error.accounts.Verify email link is for unknown address": {
                  "type": "constant",
                  "value": "Lenke for e-postbekreftelse er for en ukjent adresse"
                },
                "error.accounts.Match failed": {
                  "type": "constant",
                  "value": "Ikke samsvar"
                },
                "error.accounts.Unknown error": {
                  "type": "constant",
                  "value": "Ukjent feil"
                }
              }
            }
          }
        },
        "defaultLanguage": {
          "type": "constant",
          "value": "en"
        },
        "language": {
          "type": "constant",
          "value": ""
        },
        "dep": {
          "type": "object",
          "members": {
            "depend": {
              "type": "function",
              "refID": 23
            },
            "changed": {
              "type": "function",
              "refID": 25
            },
            "hasDependents": {
              "type": "function",
              "refID": 27
            }
          }
        },
        "depLanguage": {
          "type": "object",
          "members": {
            "depend": {
              "ref": 23
            },
            "changed": {
              "ref": 25
            },
            "hasDependents": {
              "ref": 27
            }
          }
        },
        "missingPrefix": {
          "type": "constant",
          "value": ">"
        },
        "missingPostfix": {
          "type": "constant",
          "value": "<"
        },
        "map": {
          "type": "function"
        },
        "get": {
          "type": "function"
        },
        "registerMap": {
          "type": "function"
        },
        "getLanguage": {
          "type": "function"
        },
        "getLanguages": {
          "type": "function"
        },
        "setLanguage": {
          "type": "function"
        },
        "replaceParams": {
          "type": "function"
        }
      }
    }
  },
  "splendido:accounts-templates-semantic-ui": {},
  "nooitaf:semantic-ui": {},
  "url": {
    "URL": {
      "type": "object"
    }
  },
  "http": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        }
      }
    }
  },
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "getMirrorPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "addPreProcessor": {
          "type": "function"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "parseXmlFiles": {
          "type": "function"
        },
        "FileCopier": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "start": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        },
        "attachSchema": {
          "type": "function"
        },
        "simpleSchema": {
          "type": "function"
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        },
        "attachSchema": {
          "type": "function"
        },
        "simpleSchema": {
          "type": "function"
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        },
        "attachSchema": {
          "type": "function"
        },
        "simpleSchema": {
          "type": "function"
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        },
        "attachSchema": {
          "type": "function"
        },
        "simpleSchema": {
          "type": "function"
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        },
        "attachSchema": {
          "type": "function"
        },
        "simpleSchema": {
          "type": "function"
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        },
        "attachSchema": {
          "type": "function"
        },
        "simpleSchema": {
          "type": "function"
        }
      }
    }
  },
  "alanning:package-stubber": {
    "PackageStubber": {
      "type": "object",
      "members": {
        "functionReplacementStr": {
          "type": "constant",
          "value": "function emptyFn () {}"
        },
        "validate": {
          "type": "object",
          "members": {
            "stubPackages": {
              "type": "function"
            },
            "deepCopyReplaceFn": {
              "type": "function"
            }
          }
        },
        "stubPackages": {
          "type": "function"
        },
        "listTestPackages": {
          "type": "function"
        },
        "listPackages": {
          "type": "function"
        },
        "listPackageExports": {
          "type": "function"
        },
        "deepCopyReplaceFn": {
          "type": "function"
        },
        "shouldIgnorePackage": {
          "type": "function"
        },
        "replaceFnPlaceholders": {
          "type": "function"
        },
        "stubGenerators": {
          "type": "object",
          "members": {
            "function": {
              "type": "function"
            },
            "object": {
              "type": "function"
            },
            "string": {
              "type": "function"
            },
            "number": {
              "type": "function"
            },
            "undefined": {
              "type": "function"
            }
          }
        },
        "generateStubJsCode": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {},
  "velocity:html-reporter": {},
  "aldeed:simple-schema": {
    "SimpleSchema": {
      "type": "function",
      "members": {
        "extendOptions": {
          "type": "function"
        },
        "RegEx": {
          "type": "object",
          "members": {
            "Email": {
              "type": "regexp"
            },
            "Domain": {
              "type": "regexp"
            },
            "WeakDomain": {
              "type": "regexp"
            },
            "IP": {
              "type": "regexp"
            },
            "IPv4": {
              "type": "regexp"
            },
            "IPv6": {
              "type": "regexp"
            },
            "Url": {
              "type": "regexp"
            },
            "Id": {
              "type": "regexp"
            }
          }
        },
        "addValidator": {
          "type": "function"
        },
        "messages": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "condition": {
              "type": "function"
            },
            "namedContext": {
              "type": "function"
            },
            "validator": {
              "type": "function",
              "refID": 21
            },
            "addValidator": {
              "ref": 21
            },
            "clean": {
              "type": "function"
            },
            "schema": {
              "type": "function"
            },
            "getDefinition": {
              "type": "function"
            },
            "keyIsInBlackBox": {
              "type": "function"
            },
            "labels": {
              "type": "function"
            },
            "label": {
              "type": "function"
            },
            "messages": {
              "type": "function"
            },
            "messageForError": {
              "type": "function"
            },
            "allowsKey": {
              "type": "function"
            },
            "newContext": {
              "type": "function"
            },
            "objectKeys": {
              "type": "function"
            }
          }
        }
      }
    },
    "MongoObject": {
      "type": "function",
      "members": {
        "expandKey": {
          "type": "function"
        }
      }
    }
  },
  "mongo-livedata": {},
  "aldeed:collection2": {},
  "reload": {},
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "null",
          "value": null
        },
        "autoupdateVersionRefreshable": {
          "type": "null",
          "value": null
        },
        "autoupdateVersionCordova": {
          "type": "null",
          "value": null
        }
      }
    }
  },
  "meteor-platform": {},
  "session": {},
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "service-configuration": {
    "ServiceConfiguration": {
      "type": "object",
      "members": {
        "configurations": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            },
            "attachSchema": {
              "type": "function"
            },
            "simpleSchema": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  }
}
var globalContext = (typeof global !== 'undefined') ? global : window

for (var packageName in packageMetadata) {
  for (var packageExportName in packageMetadata[packageName]) {
    var packageExport = packageMetadata[packageName][packageExportName]
    globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
  }
}
