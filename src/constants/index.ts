import { Clock,  Calendar, Users, Video } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Video,
    title: "New Call",
    description: "Start an instant call",
    color: "white",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "white",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] =[
  {
    "id": "two-sum",
    "title": "Two Sum",
    "description": "This is a placeholder description for the problem 'Two Sum'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function two_sum(input) {\n  // Write your solution here\n}",
      "python": "def two_sum(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void twosum(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "description": "This is a placeholder description for the problem 'Best Time to Buy and Sell Stock'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function best_time_to_buy_and_sell_stock(input) {\n  // Write your solution here\n}",
      "python": "def best_time_to_buy_and_sell_stock(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void besttimetobuyandsellstock(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "contains-duplicate",
    "title": "Contains Duplicate",
    "description": "This is a placeholder description for the problem 'Contains Duplicate'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function contains_duplicate(input) {\n  // Write your solution here\n}",
      "python": "def contains_duplicate(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void containsduplicate(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "description": "This is a placeholder description for the problem 'Product of Array Except Self'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function product_of_array_except_self(input) {\n  // Write your solution here\n}",
      "python": "def product_of_array_except_self(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void productofarrayexceptself(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "maximum-subarray",
    "title": "Maximum Subarray",
    "description": "This is a placeholder description for the problem 'Maximum Subarray'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function maximum_subarray(input) {\n  // Write your solution here\n}",
      "python": "def maximum_subarray(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void maximumsubarray(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "description": "This is a placeholder description for the problem 'Maximum Product Subarray'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function maximum_product_subarray(input) {\n  // Write your solution here\n}",
      "python": "def maximum_product_subarray(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void maximumproductsubarray(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "find-minimum-in-rotated-sorted-array",
    "title": "Find Minimum in Rotated Sorted Array",
    "description": "This is a placeholder description for the problem 'Find Minimum in Rotated Sorted Array'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function find_minimum_in_rotated_sorted_array(input) {\n  // Write your solution here\n}",
      "python": "def find_minimum_in_rotated_sorted_array(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void findminimuminrotatedsortedarray(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "search-in-rotated-sorted-array",
    "title": "Search in Rotated Sorted Array",
    "description": "This is a placeholder description for the problem 'Search in Rotated Sorted Array'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function search_in_rotated_sorted_array(input) {\n  // Write your solution here\n}",
      "python": "def search_in_rotated_sorted_array(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void searchinrotatedsortedarray(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "3sum",
    "title": "3Sum",
    "description": "This is a placeholder description for the problem '3Sum'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function 3sum(input) {\n  // Write your solution here\n}",
      "python": "def 3sum(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void 3sum(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "description": "This is a placeholder description for the problem 'Container With Most Water'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function container_with_most_water(input) {\n  // Write your solution here\n}",
      "python": "def container_with_most_water(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void containerwithmostwater(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "sum-of-two-integers",
    "title": "Sum of Two Integers",
    "description": "This is a placeholder description for the problem 'Sum of Two Integers'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function sum_of_two_integers(input) {\n  // Write your solution here\n}",
      "python": "def sum_of_two_integers(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void sumoftwointegers(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "number-of-1-bits",
    "title": "Number of 1 Bits",
    "description": "This is a placeholder description for the problem 'Number of 1 Bits'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function number_of_1_bits(input) {\n  // Write your solution here\n}",
      "python": "def number_of_1_bits(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void numberof1bits(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "counting-bits",
    "title": "Counting Bits",
    "description": "This is a placeholder description for the problem 'Counting Bits'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function counting_bits(input) {\n  // Write your solution here\n}",
      "python": "def counting_bits(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void countingbits(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "missing-number",
    "title": "Missing Number",
    "description": "This is a placeholder description for the problem 'Missing Number'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function missing_number(input) {\n  // Write your solution here\n}",
      "python": "def missing_number(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void missingnumber(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "reverse-bits",
    "title": "Reverse Bits",
    "description": "This is a placeholder description for the problem 'Reverse Bits'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function reverse_bits(input) {\n  // Write your solution here\n}",
      "python": "def reverse_bits(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void reversebits(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "description": "This is a placeholder description for the problem 'Climbing Stairs'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function climbing_stairs(input) {\n  // Write your solution here\n}",
      "python": "def climbing_stairs(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void climbingstairs(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "description": "This is a placeholder description for the problem 'Coin Change'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function coin_change(input) {\n  // Write your solution here\n}",
      "python": "def coin_change(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void coinchange(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "description": "This is a placeholder description for the problem 'Longest Increasing Subsequence'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function longest_increasing_subsequence(input) {\n  // Write your solution here\n}",
      "python": "def longest_increasing_subsequence(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void longestincreasingsubsequence(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "description": "This is a placeholder description for the problem 'Longest Common Subsequence'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function longest_common_subsequence(input) {\n  // Write your solution here\n}",
      "python": "def longest_common_subsequence(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void longestcommonsubsequence(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "word-break",
    "title": "Word Break",
    "description": "This is a placeholder description for the problem 'Word Break'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function word_break(input) {\n  // Write your solution here\n}",
      "python": "def word_break(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void wordbreak(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "combination-sum",
    "title": "Combination Sum",
    "description": "This is a placeholder description for the problem 'Combination Sum'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function combination_sum(input) {\n  // Write your solution here\n}",
      "python": "def combination_sum(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void combinationsum(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "house-robber",
    "title": "House Robber",
    "description": "This is a placeholder description for the problem 'House Robber'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function house_robber(input) {\n  // Write your solution here\n}",
      "python": "def house_robber(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void houserobber(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "house-robber-ii",
    "title": "House Robber II",
    "description": "This is a placeholder description for the problem 'House Robber II'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function house_robber_ii(input) {\n  // Write your solution here\n}",
      "python": "def house_robber_ii(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void houserobberii(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "decode-ways",
    "title": "Decode Ways",
    "description": "This is a placeholder description for the problem 'Decode Ways'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function decode_ways(input) {\n  // Write your solution here\n}",
      "python": "def decode_ways(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void decodeways(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "unique-paths",
    "title": "Unique Paths",
    "description": "This is a placeholder description for the problem 'Unique Paths'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function unique_paths(input) {\n  // Write your solution here\n}",
      "python": "def unique_paths(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void uniquepaths(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "jump-game",
    "title": "Jump Game",
    "description": "This is a placeholder description for the problem 'Jump Game'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function jump_game(input) {\n  // Write your solution here\n}",
      "python": "def jump_game(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void jumpgame(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "clone-graph",
    "title": "Clone Graph",
    "description": "This is a placeholder description for the problem 'Clone Graph'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function clone_graph(input) {\n  // Write your solution here\n}",
      "python": "def clone_graph(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void clonegraph(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule",
    "description": "This is a placeholder description for the problem 'Course Schedule'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function course_schedule(input) {\n  // Write your solution here\n}",
      "python": "def course_schedule(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void courseschedule(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "description": "This is a placeholder description for the problem 'Pacific Atlantic Water Flow'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function pacific_atlantic_water_flow(input) {\n  // Write your solution here\n}",
      "python": "def pacific_atlantic_water_flow(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void pacificatlanticwaterflow(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "description": "This is a placeholder description for the problem 'Number of Islands'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function number_of_islands(input) {\n  // Write your solution here\n}",
      "python": "def number_of_islands(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void numberofislands(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "description": "This is a placeholder description for the problem 'Longest Consecutive Sequence'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function longest_consecutive_sequence(input) {\n  // Write your solution here\n}",
      "python": "def longest_consecutive_sequence(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void longestconsecutivesequence(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "alien-dictionary",
    "title": "Alien Dictionary",
    "description": "This is a placeholder description for the problem 'Alien Dictionary'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function alien_dictionary(input) {\n  // Write your solution here\n}",
      "python": "def alien_dictionary(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void aliendictionary(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "graph-valid-tree",
    "title": "Graph Valid Tree",
    "description": "This is a placeholder description for the problem 'Graph Valid Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function graph_valid_tree(input) {\n  // Write your solution here\n}",
      "python": "def graph_valid_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void graphvalidtree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "number-of-connected-components-in-an-undirected-graph",
    "title": "Number of Connected Components in an Undirected Graph",
    "description": "This is a placeholder description for the problem 'Number of Connected Components in an Undirected Graph'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function number_of_connected_components_in_an_undirected_graph(input) {\n  // Write your solution here\n}",
      "python": "def number_of_connected_components_in_an_undirected_graph(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void numberofconnectedcomponentsinanundirectedgraph(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "insert-interval",
    "title": "Insert Interval",
    "description": "This is a placeholder description for the problem 'Insert Interval'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function insert_interval(input) {\n  // Write your solution here\n}",
      "python": "def insert_interval(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void insertinterval(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "description": "This is a placeholder description for the problem 'Merge Intervals'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function merge_intervals(input) {\n  // Write your solution here\n}",
      "python": "def merge_intervals(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void mergeintervals(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "non-overlapping-intervals",
    "title": "Non-overlapping Intervals",
    "description": "This is a placeholder description for the problem 'Non-overlapping Intervals'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function non_overlapping_intervals(input) {\n  // Write your solution here\n}",
      "python": "def non_overlapping_intervals(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void nonoverlappingintervals(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "meeting-rooms",
    "title": "Meeting Rooms",
    "description": "This is a placeholder description for the problem 'Meeting Rooms'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function meeting_rooms(input) {\n  // Write your solution here\n}",
      "python": "def meeting_rooms(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void meetingrooms(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "description": "This is a placeholder description for the problem 'Meeting Rooms II'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function meeting_rooms_ii(input) {\n  // Write your solution here\n}",
      "python": "def meeting_rooms_ii(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void meetingroomsii(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "set-matrix-zeroes",
    "title": "Set Matrix Zeroes",
    "description": "This is a placeholder description for the problem 'Set Matrix Zeroes'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function set_matrix_zeroes(input) {\n  // Write your solution here\n}",
      "python": "def set_matrix_zeroes(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void setmatrixzeroes(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "spiral-matrix",
    "title": "Spiral Matrix",
    "description": "This is a placeholder description for the problem 'Spiral Matrix'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function spiral_matrix(input) {\n  // Write your solution here\n}",
      "python": "def spiral_matrix(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void spiralmatrix(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "rotate-image",
    "title": "Rotate Image",
    "description": "This is a placeholder description for the problem 'Rotate Image'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function rotate_image(input) {\n  // Write your solution here\n}",
      "python": "def rotate_image(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void rotateimage(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "word-search",
    "title": "Word Search",
    "description": "This is a placeholder description for the problem 'Word Search'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function word_search(input) {\n  // Write your solution here\n}",
      "python": "def word_search(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void wordsearch(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "description": "This is a placeholder description for the problem 'Longest Substring Without Repeating Characters'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function longest_substring_without_repeating_characters(input) {\n  // Write your solution here\n}",
      "python": "def longest_substring_without_repeating_characters(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void longestsubstringwithoutrepeatingcharacters(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "longest-repeating-character-replacement",
    "title": "Longest Repeating Character Replacement",
    "description": "This is a placeholder description for the problem 'Longest Repeating Character Replacement'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function longest_repeating_character_replacement(input) {\n  // Write your solution here\n}",
      "python": "def longest_repeating_character_replacement(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void longestrepeatingcharacterreplacement(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "description": "This is a placeholder description for the problem 'Minimum Window Substring'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function minimum_window_substring(input) {\n  // Write your solution here\n}",
      "python": "def minimum_window_substring(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void minimumwindowsubstring(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "valid-anagram",
    "title": "Valid Anagram",
    "description": "This is a placeholder description for the problem 'Valid Anagram'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function valid_anagram(input) {\n  // Write your solution here\n}",
      "python": "def valid_anagram(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void validanagram(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "group-anagrams",
    "title": "Group Anagrams",
    "description": "This is a placeholder description for the problem 'Group Anagrams'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function group_anagrams(input) {\n  // Write your solution here\n}",
      "python": "def group_anagrams(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void groupanagrams(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "description": "This is a placeholder description for the problem 'Valid Parentheses'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function valid_parentheses(input) {\n  // Write your solution here\n}",
      "python": "def valid_parentheses(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void validparentheses(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "valid-palindrome",
    "title": "Valid Palindrome",
    "description": "This is a placeholder description for the problem 'Valid Palindrome'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function valid_palindrome(input) {\n  // Write your solution here\n}",
      "python": "def valid_palindrome(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void validpalindrome(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "description": "This is a placeholder description for the problem 'Longest Palindromic Substring'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function longest_palindromic_substring(input) {\n  // Write your solution here\n}",
      "python": "def longest_palindromic_substring(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void longestpalindromicsubstring(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "palindromic-substrings",
    "title": "Palindromic Substrings",
    "description": "This is a placeholder description for the problem 'Palindromic Substrings'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function palindromic_substrings(input) {\n  // Write your solution here\n}",
      "python": "def palindromic_substrings(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void palindromicsubstrings(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "encode-and-decode-strings",
    "title": "Encode and Decode Strings",
    "description": "This is a placeholder description for the problem 'Encode and Decode Strings'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function encode_and_decode_strings(input) {\n  // Write your solution here\n}",
      "python": "def encode_and_decode_strings(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void encodeanddecodestrings(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "description": "This is a placeholder description for the problem 'Maximum Depth of Binary Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function maximum_depth_of_binary_tree(input) {\n  // Write your solution here\n}",
      "python": "def maximum_depth_of_binary_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void maximumdepthofbinarytree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "same-tree",
    "title": "Same Tree",
    "description": "This is a placeholder description for the problem 'Same Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function same_tree(input) {\n  // Write your solution here\n}",
      "python": "def same_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void sametree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "description": "This is a placeholder description for the problem 'Invert Binary Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function invert_binary_tree(input) {\n  // Write your solution here\n}",
      "python": "def invert_binary_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void invertbinarytree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "subtree-of-another-tree",
    "title": "Subtree of Another Tree",
    "description": "This is a placeholder description for the problem 'Subtree of Another Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function subtree_of_another_tree(input) {\n  // Write your solution here\n}",
      "python": "def subtree_of_another_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void subtreeofanothertree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-search-tree",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "description": "This is a placeholder description for the problem 'Lowest Common Ancestor of a Binary Search Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function lowest_common_ancestor_of_a_binary_search_tree(input) {\n  // Write your solution here\n}",
      "python": "def lowest_common_ancestor_of_a_binary_search_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void lowestcommonancestorofabinarysearchtree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "binary-tree-level-order-traversal",
    "title": "Binary Tree Level Order Traversal",
    "description": "This is a placeholder description for the problem 'Binary Tree Level Order Traversal'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function binary_tree_level_order_traversal(input) {\n  // Write your solution here\n}",
      "python": "def binary_tree_level_order_traversal(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void binarytreelevelordertraversal(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "serialize-and-deserialize-binary-tree",
    "title": "Serialize and Deserialize Binary Tree",
    "description": "This is a placeholder description for the problem 'Serialize and Deserialize Binary Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function serialize_and_deserialize_binary_tree(input) {\n  // Write your solution here\n}",
      "python": "def serialize_and_deserialize_binary_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void serializeanddeserializebinarytree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "description": "This is a placeholder description for the problem 'Construct Binary Tree from Preorder and Inorder Traversal'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function construct_binary_tree_from_preorder_and_inorder_traversal(input) {\n  // Write your solution here\n}",
      "python": "def construct_binary_tree_from_preorder_and_inorder_traversal(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void constructbinarytreefrompreorderandinordertraversal(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "description": "This is a placeholder description for the problem 'Validate Binary Search Tree'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function validate_binary_search_tree(input) {\n  // Write your solution here\n}",
      "python": "def validate_binary_search_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void validatebinarysearchtree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "kth-smallest-element-in-a-bst",
    "title": "Kth Smallest Element in a BST",
    "description": "This is a placeholder description for the problem 'Kth Smallest Element in a BST'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function kth_smallest_element_in_a_bst(input) {\n  // Write your solution here\n}",
      "python": "def kth_smallest_element_in_a_bst(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void kthsmallestelementinabst(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge K Sorted Lists",
    "description": "This is a placeholder description for the problem 'Merge K Sorted Lists'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function merge_k_sorted_lists(input) {\n  // Write your solution here\n}",
      "python": "def merge_k_sorted_lists(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void mergeksortedlists(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "description": "This is a placeholder description for the problem 'Top K Frequent Elements'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function top_k_frequent_elements(input) {\n  // Write your solution here\n}",
      "python": "def top_k_frequent_elements(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void topkfrequentelements(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "find-median-from-data-stream",
    "title": "Find Median from Data Stream",
    "description": "This is a placeholder description for the problem 'Find Median from Data Stream'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function find_median_from_data_stream(input) {\n  // Write your solution here\n}",
      "python": "def find_median_from_data_stream(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void findmedianfromdatastream(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "implement-trie-prefix-tree",
    "title": "Implement Trie (Prefix Tree)",
    "description": "This is a placeholder description for the problem 'Implement Trie (Prefix Tree)'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function implement_trie_prefix_tree(input) {\n  // Write your solution here\n}",
      "python": "def implement_trie_prefix_tree(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void implementtrieprefixtree(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "add-and-search-word-data-structure-design",
    "title": "Add and Search Word",
    "description": "This is a placeholder description for the problem 'Add and Search Word'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function add_and_search_word_data_structure_design(input) {\n  // Write your solution here\n}",
      "python": "def add_and_search_word_data_structure_design(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void addandsearchworddatastructuredesign(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "word-search-ii",
    "title": "Word Search II",
    "description": "This is a placeholder description for the problem 'Word Search II'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function word_search_ii(input) {\n  // Write your solution here\n}",
      "python": "def word_search_ii(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void wordsearchii(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "subsets",
    "title": "Subsets",
    "description": "This is a placeholder description for the problem 'Subsets'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function subsets(input) {\n  // Write your solution here\n}",
      "python": "def subsets(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void subsets(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "combination-sum",
    "title": "Combination Sum",
    "description": "This is a placeholder description for the problem 'Combination Sum'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function combination_sum(input) {\n  // Write your solution here\n}",
      "python": "def combination_sum(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void combinationsum(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "permutations",
    "title": "Permutations",
    "description": "This is a placeholder description for the problem 'Permutations'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function permutations(input) {\n  // Write your solution here\n}",
      "python": "def permutations(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void permutations(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "subsets-ii",
    "title": "Subsets II",
    "description": "This is a placeholder description for the problem 'Subsets II'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function subsets_ii(input) {\n  // Write your solution here\n}",
      "python": "def subsets_ii(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void subsetsii(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "word-search",
    "title": "Word Search",
    "description": "This is a placeholder description for the problem 'Word Search'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function word_search(input) {\n  // Write your solution here\n}",
      "python": "def word_search(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void wordsearch(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "palindrome-partitioning",
    "title": "Palindrome Partitioning",
    "description": "This is a placeholder description for the problem 'Palindrome Partitioning'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function palindrome_partitioning(input) {\n  // Write your solution here\n}",
      "python": "def palindrome_partitioning(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void palindromepartitioning(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "letter-combinations-of-a-phone-number",
    "title": "Letter Combinations of a Phone Number",
    "description": "This is a placeholder description for the problem 'Letter Combinations of a Phone Number'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function letter_combinations_of_a_phone_number(input) {\n  // Write your solution here\n}",
      "python": "def letter_combinations_of_a_phone_number(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void lettercombinationsofaphonenumber(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "insert-interval",
    "title": "Insert Interval",
    "description": "This is a placeholder description for the problem 'Insert Interval'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function insert_interval(input) {\n  // Write your solution here\n}",
      "python": "def insert_interval(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void insertinterval(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "description": "This is a placeholder description for the problem 'Merge Intervals'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function merge_intervals(input) {\n  // Write your solution here\n}",
      "python": "def merge_intervals(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void mergeintervals(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "non-overlapping-intervals",
    "title": "Non-overlapping Intervals",
    "description": "This is a placeholder description for the problem 'Non-overlapping Intervals'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function non_overlapping_intervals(input) {\n  // Write your solution here\n}",
      "python": "def non_overlapping_intervals(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void nonoverlappingintervals(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "meeting-rooms",
    "title": "Meeting Rooms",
    "description": "This is a placeholder description for the problem 'Meeting Rooms'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function meeting_rooms(input) {\n  // Write your solution here\n}",
      "python": "def meeting_rooms(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void meetingrooms(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "description": "This is a placeholder description for the problem 'Meeting Rooms II'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function meeting_rooms_ii(input) {\n  // Write your solution here\n}",
      "python": "def meeting_rooms_ii(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void meetingroomsii(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "lfu-cache",
    "title": "LFU Cache",
    "description": "This is a placeholder description for the problem 'LFU Cache'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function lfu_cache(input) {\n  // Write your solution here\n}",
      "python": "def lfu_cache(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void lfucache(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "lru-cache",
    "title": "LRU Cache",
    "description": "This is a placeholder description for the problem 'LRU Cache'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function lru_cache(input) {\n  // Write your solution here\n}",
      "python": "def lru_cache(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void lrucache(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  },
  {
    "id": "design-tinyurl",
    "title": "Design TinyURL",
    "description": "This is a placeholder description for the problem 'Design TinyURL'.",
    "examples": [
      {
        "input": "Example input here",
        "output": "Example output here",
        "explanation": "Example explanation"
      }
    ],
    "starterCode": {
      "javascript": "function design_tinyurl(input) {\n  // Write your solution here\n}",
      "python": "def design_tinyurl(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public void designtinyurl(Type input) {\n        // Write your solution here\n    }\n}"
    },
    "constraints": [
      "Add constraints based on real problem if needed."
    ]
  }
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
