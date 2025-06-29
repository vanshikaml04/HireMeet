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
    "description": "Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the target...",
    "examples": [
      {
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] == 9"
      }
    ],
    "starterCode": {
      "javascript": "function twoSum(nums, target) {\n  // ...\n}",
      "python": "def two_sum(nums, target):\n    # ...\n",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i], target <= 10^9",
      "Exactly one valid answer."
    ]
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the i‑th day. You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell it...",
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 5."
      }
    ],
    "starterCode": {
      "javascript": "function maxProfit(prices) {\n  // ...\n}",
      "python": "def max_profit(prices):\n    # ...\n",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ]
  },
  {
    "id": "contains-duplicate",
    "title": "Contains Duplicate",
    "description": "Given an integer array `nums`, return true if any value appears at least twice in the array, and false if every element is distinct.",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true",
        "explanation": "1 appears twice."
      }
    ],
    "starterCode": {
      "javascript": "function containsDuplicate(nums) {\n  // ...\n}",
      "python": "def contains_duplicate(nums):\n    # ...\n",
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ]
  },
  {
    "id": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "description": "Given an integer array `nums`, return an output array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`...",
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]",
        "explanation": "Products: [2*3*4, 1*3*4, 1*2*4, 1*2*3]."
      }
    ],
    "starterCode": {
      "javascript": "function productExceptSelf(nums) {\n  // ...\n}",
      "python": "def product_except_self(nums):\n    # ...\n",
      "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-1000 <= nums[i] <= 1000",
      "Product of output fits in a 32-bit integer."
    ]
  },
  {
    "id": "maximum-subarray",
    "title": "Maximum Subarray",
    "description": "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "Subarray [4,-1,2,1] has the largest sum = 6."
      }
    ],
    "starterCode": {
      "javascript": "function maxSubArray(nums) {\n  // ...\n}",
      "python": "def max_sub_array(nums):\n    # ...\n",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // ...\n    }\n}"
    },
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
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
