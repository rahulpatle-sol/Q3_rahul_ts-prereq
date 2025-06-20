export type Turbin3Prereq = {
  "version": "0.1.0",
  "name": "Turbin3_prereq",
  // PASTE THE ENTIRE IDL JSON CONTENT HERE
  "instructions": [
    {
      "name": "submit",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prereq",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "github",
          "type": {
            "vec": "u8"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Prereq",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "github",
            "type": {
              "vec": "u8"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidGithub",
      "msg": "Invalid Github account"
    }
  ]
};

export const IDL: Turbin3Prereq = {
  "version": "0.1.0",
  "name": "Turbin3_prereq",
  // PASTE THE ENTIRE IDL JSON CONTENT HERE AGAIN (It's the same content as above)
  "instructions": [
    {
      "name": "submit",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "prereq",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "github",
          "type": {
            "vec": "u8"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Prereq",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "github",
            "type": {
              "vec": "u8"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidGithub",
      "msg": "Invalid Github account"
    }
  ]
};