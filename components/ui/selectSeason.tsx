'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectSeason() {

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Season" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="diwali">Diwali</SelectItem>
        <SelectItem value="eid">Eid</SelectItem>
        <SelectItem value="christmas">Christmas</SelectItem>
        <SelectItem value="newyear">New Year</SelectItem>
        <SelectItem value="none">None</SelectItem>
      </SelectContent>
    </Select>

  )
}
