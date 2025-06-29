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
    "id": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "description": "Given an integer array `nums`, find the contiguous subarray within an array (containing at least one number) which has the largest product, and return the product.",
    "examples": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6",
        "explanation": "Subarray [2,3] has the largest product 6."
      }
    ],
    "starterCode": {
      "javascript": "function maxProduct(nums) {\n  // ...\n}",
      "python": "def max_product(nums):\n    # ...\n",
      "java": "class Solution {\n    public int maxProduct(int[] nums) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-10 <= nums[i] <= 10"
    ]
  },
  {
    "id": "find-minimum-in-rotated-sorted-array",
    "title": "Find Minimum in Rotated Sorted Array",
    "description": "Suppose an array of length `n` sorted in ascending order is rotated between 1 and n times. Find the minimum element. You must write an algorithm that runs in O(log n) time.",
    "examples": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "explanation": "The smallest value is 1."
      }
    ],
    "starterCode": {
      "javascript": "function findMin(nums) {\n  // ...\n}",
      "python": "def find_min(nums):\n    # ...\n",
      "java": "class Solution {\n    public int findMin(int[] nums) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= nums.length <= 5000",
      "-5000 <= nums[i] <= 5000",
      "All elements are unique",
      "nums is rotated"
    ]
  },
  {
    "id": "search-in-rotated-sorted-array",
    "title": "Search in Rotated Sorted Array",
    "description": "Given the array `nums` after rotation and an integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not. You must write an algorithm with O(log n) runtime complexity.",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "explanation": "Element 0 is at index 4."
      }
    ],
    "starterCode": {
      "javascript": "function search(nums, target) {\n  // ...\n}",
      "python": "def search(nums, target):\n    # ...\n",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i] <= 10^4",
      "All values are unique",
      "nums is rotated"
    ]
  },
  {
    "id": "three-sum",
    "title": "3Sum",
    "description": "Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j != k`, and `nums[i] + nums[j] + nums[k] == 0`.",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "These are the unique triplets that sum to 0."
      }
    ],
    "starterCode": {
      "javascript": "function threeSum(nums) {\n  // ...\n}",
      "python": "def three_sum(nums):\n    # ...\n",
      "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ]
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "description": "You are given an integer array `height` of length `n`. There are `n` vertical lines such that the two endpoints of the ith line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container that holds the most water.",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "Max area between lines at index 1 and 8."
      }
    ],
    "starterCode": {
      "javascript": "function maxArea(height) {\n  // ...\n}",
      "python": "def max_area(height):\n    # ...\n",
      "java": "class Solution {\n    public int maxArea(int[] height) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "2 <= height.length <= 10^5",
      "0 <= height[i] <= 10^4"
    ]
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "description": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A string is valid if open brackets are closed in the correct order.",
    "examples": [
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "Each type of bracket is correctly closed."
      }
    ],
    "starterCode": {
      "javascript": "function isValid(s) {\n  // ...\n}",
      "python": "def is_valid(s):\n    # ...\n",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= s.length <= 10^4",
      "s consists only of '()[]{}'"
    ]
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "description": "Given an array of intervals where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": "Overlapping intervals [1,3] and [2,6] merged into [1,6]."
      }
    ],
    "starterCode": {
      "javascript": "function merge(intervals) {\n  // ...\n}",
      "python": "def merge(intervals):\n    # ...\n",
      "java": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= start_i <= end_i <= 10^4"
    ]
  },
  {
    "id": "insert-interval",
    "title": "Insert Interval",
    "description": "Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).",
    "examples": [
      {
        "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        "output": "[[1,5],[6,9]]",
        "explanation": "Interval [2,5] overlaps with [1,3] to become [1,5]."
      }
    ],
    "starterCode": {
      "javascript": "function insert(intervals, newInterval) {\n  // ...\n}",
      "python": "def insert(intervals, new_interval):\n    # ...\n",
      "java": "class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= start_i <= end_i <= 10^4"
    ]
  },
  {
    "id": "group-anagrams",
    "title": "Group Anagrams",
    "description": "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.",
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
        "explanation": "Anagrams are grouped together."
      }
    ],
    "starterCode": {
      "javascript": "function groupAnagrams(strs) {\n  // ...\n}",
      "python": "def group_anagrams(strs):\n    # ...\n",
      "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100"
    ]
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "description": "Given a non-empty array of integers, return the `k` most frequent elements.",
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": "1 appears 3 times, 2 appears 2 times."
      }
    ],
    "starterCode": {
      "javascript": "function topKFrequent(nums, k) {\n  // ...\n}",
      "python": "def top_k_frequent(nums, k):\n    # ...\n",
      "java": "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= nums.length <= 10^5",
      "k is in the range [1, number of unique elements]"
    ]
  }
]


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
