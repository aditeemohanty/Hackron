'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWeather() {

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Weather Condition" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="cloudy">Cloudy</SelectItem>
        <SelectItem value="cold">Cold</SelectItem>
        <SelectItem value="rainy">Rainy</SelectItem>
        <SelectItem value="sunny">Sunny</SelectItem>
      </SelectContent>
    </Select>

  )
}
